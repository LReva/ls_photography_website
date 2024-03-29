import React from 'react';
import Button from '@mui/material/Button';


const ButtonLink = ({url, buttonName}) => {
    const handleNavigation = (url) => {
        window.location.href = url; 
      };
  
    return (
            <Button  
                sx={{ 
                    color: 'rgb(0, 15, 14)', 
                    display: 'block', 
                    fontFamily: 'Nanum Brush Script, cursive',
                    fontWeight: 'bold',
                    fontSize: '1.5em', 
                    margin: '1.4rem',
                    padding: '6px 20px',
                    textDecoration: 'underline',
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: 'black',
                        color: 'white',
                    }}}
                onClick={() => handleNavigation(url)}>
                    {buttonName}
            </Button>
    );
};

export default ButtonLink;