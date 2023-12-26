import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';


const Footer = () => {
    return (
      <footer style={{backgroundColor: 'rgb(0, 15, 14)'}}>
          <BottomNavigation
            showLabels
          >
            <BottomNavigationAction label="Email Me" icon={<EmailIcon />} />
            <BottomNavigationAction label="Share" icon={<ShareIcon />} />
          </BottomNavigation>
          <Box>
            <p style={{fontSize:'0.8em', textAlign: 'center', color: 'white'}}>© All Rights Reserved</p>
          </Box>
      </footer>
    );
};

export default Footer;