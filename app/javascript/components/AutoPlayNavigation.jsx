import React from 'react';
import { IconButton, Box } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const localTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(128,128,128)'
    },
  }, 
});

const AutoPlayNavigation = ({autoPlayEnabled, toggleAutoplay, style}) => {
      
      return (
        <ThemeProvider theme={localTheme}>
          <Box  style={style}>
                { !autoPlayEnabled &&
                  <IconButton
                    color="primary"
                    onClick={toggleAutoplay}
                  >
                    <PlayCircleFilledWhiteIcon  />
                  </IconButton >           
                }
                { autoPlayEnabled &&
                  <IconButton
                    color="primary"
                    onClick={toggleAutoplay}
                  >
                    <StopCircleIcon  />
                  </IconButton>
                }
          </Box>
      </ThemeProvider>
      );
    };

export default AutoPlayNavigation;