import React, {useState} from 'react';
import { useTheme } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PhotoCarouselBox from './PhotoCarouselBox.jsx';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const localTheme = createTheme({
  components: {
    MuiMobileStepper: {
      styleOverrides: {
        dot: {
          backgroundColor: 'gray', 
        },
        dotActive: {
          backgroundColor: 'black', 
        },
      },
    },
  },
  palette: {
    primary: {
      main: 'rgb(0,0,0)'
    },
  }, 
});

const photoCarouselBoxStyle = {height: '70vh', objectFit: 'scale-down'}

const CategoryPhotoCarousel = ({images, maxSteps}) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  
  if (images.length > 0) {
     return (
        <ThemeProvider theme={localTheme}>
            <div>
                <Box sx={{ 
                        maxWidth: '100%', 
                        flexGrow: 1,
                        height: '90vh',
                        position: 'relative', 
                        marginTop: '5vh',
                        display: 'flex',
                        flexDirection: 'column'}}>
                <Box sx={{display: 'flex',
                          flexDirection: 'row',
                          alignContent: 'center'}}>
                <Button 
                        sx ={{display: {xs: 'none', md: 'flex'}}}
                        size="large" 
                        onClick={handleBack} 
                        disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                </Button>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                    interval={6000}
                >
                    {images.map((step, index) => (
                    <div key={step.id}>
                        {Math.abs(activeStep - index) <= 2 ? (
                        <PhotoCarouselBox photo={step} style={photoCarouselBoxStyle}
                        />
                        ) : null}
                    </div>
                    ))}
                </AutoPlaySwipeableViews>
                <Button
                        sx ={{display: {xs: 'none', md: 'flex'}}}
                        size="large"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                        >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                </Button>
                </Box>
                <Paper
                    square
                    elevation={0}
                    sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: 'background.default',
                    }}
                >
                    <Typography sx={{
                        textIndent: 0,
                        fontFamily: 'Caveat',
                        fontSize: '1.65em'
                    }}>{images[activeStep].description}</Typography>
                </Paper>
                </Box>
            </div>
      </ThemeProvider>
    )
  }
}

export default CategoryPhotoCarousel;