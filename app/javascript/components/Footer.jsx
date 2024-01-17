import React, {useState} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FacebookIcon from '@mui/icons-material/Facebook';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const Footer = () => {

    const [emailDialogOpen, setemailDialogOpen] = useState(false);
    const [shareDialogOpen, setShareDialogOpen] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    
    {/*To be changed to a proper link before deployment*/}
    const url = "http://192.168.56.20:3000/" 
    const emailAddress = 'lenascott.art@gmail.com'

    const handleClickEmailDialogOpen = () => {
      setemailDialogOpen(true);
    };
  
    const handleEmailDialogClose = () => {
      setemailDialogOpen(false);
    };
  
    const handleEmailInitiation = () => {
      window.location.href = `mailto:${emailAddress}`;
      handleEmailDialogClose()
    }

    const handleClickshareDialogOpen = () => {
      setShareDialogOpen(true);
    };
  
    const handleshareDialogOpenClose = () => {
      setShareDialogOpen(false);
    };

    const copyLink = async (url) => {
      setCopySuccess(true);
      // try {
      //   await navigator.clipboard.writeText(url);
      //   setCopySuccess(true);
      // } catch (err) {
      //   setCopySuccess(false);
      //   console.error('Error copying text: ', err);
      // }
    };
    
    const shareToFacebook = () => {
      window.location.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`
    }

    return (
      <footer style={{backgroundColor: 'rgb(0, 15, 14)'}}>
          <BottomNavigation
            showLabels
          >
            <BottomNavigationAction label="Email Me" icon={<EmailIcon />} onClick = {()=> handleClickEmailDialogOpen()}/>
            <BottomNavigationAction label="Share" icon={<ShareIcon />} onClick = {()=> handleClickshareDialogOpen()} />
          </BottomNavigation>
          <Dialog
              fullScreen={fullScreen}
              open={emailDialogOpen}
              onClose={handleEmailDialogClose}
              aria-labelledby="responsive-dialog-email"
            >
              <DialogTitle id="responsive-dialog-title-email" sx= {{fontFamily: 'Caveat', fontSize: '1.2em'}}>
                {"Email us?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText sx={{fontFamily: 'Caveat', fontSize: '1.2em', textAlign: 'start'}}>
                {`We would be happy to hear from you at ${emailAddress}! Would you like to email us now?`}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button sx={{color: 'black', fontFamily: 'Nanum Brush Script', fontSize: '1.2em'}} autoFocus onClick={handleEmailDialogClose}>
                  Not now
                </Button>
                <Button sx={{color: 'black', fontFamily: 'Nanum Brush Script', fontSize: '1.2em'}} onClick={handleEmailInitiation} autoFocus>
                  Absolutely!
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog
              fullScreen={fullScreen}
              open={shareDialogOpen}
              onClose={handleshareDialogOpenClose}
              aria-labelledby="responsive-dialog-share"
            >
              <DialogTitle id="responsive-dialog-title-share" sx= {{fontFamily: 'Caveat', fontSize: '1.2em'}}>
                {"Share our photos with the world!"}
              </DialogTitle>
              <DialogContent>
                <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                <DialogContentText sx={{fontFamily: 'Caveat', fontSize: '1.2em', textAlign: 'start'}}>
                {`${url}`}
                </DialogContentText>
                <Button sx={{margin: '10px'}} onClick= {()=> copyLink({url})}> 
                  <ContentCopyIcon fontSize="large" sx={{color: 'gray'}}/>
                </Button>
                </Box>
                {copySuccess && 
                    <Alert icon={<CheckIcon fontSize="inherit" />} 
                    sx={{
                      backgroundColor: 'lightgray', 
                      color: '#082d10', 
                      '.MuiAlert-icon': { 
                        color: '#082d10' 
                      }
                    }}>
                          Copied!
                    </Alert>
                }
                <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                <DialogContentText sx={{fontFamily: 'Caveat', fontSize: '1.2em', textAlign: 'start', textWrap: 'nowrap'}}>
                  Share on Facebook
                </DialogContentText>
                <Button sx={{margin: '10px'}} onClick= {()=> shareToFacebook()}> 
                 <FacebookIcon fontSize="large" sx={{color: 'gray'}}/>
                </Button>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button sx={{color: 'black', fontFamily: 'Nanum Brush Script', fontSize: '1.2em'}} onClick={handleshareDialogOpenClose} autoFocus>
                  Close the window
                </Button>
              </DialogActions>
            </Dialog>
          <Box>
            <p style={{fontSize:'0.8em', textAlign: 'center', color: 'white', marginBottom: 0}}>© All Rights Reserved</p>
          </Box>
      </footer>
    );
};

export default Footer;