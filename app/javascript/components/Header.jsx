import React, { useState}  from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';

const pages = ['About', 'All Photos', 'Categories'];
const categories = []

const localTheme = createTheme({
    palette: {
      primary: {
        main: 'rgb(0, 15, 14)'
      },
    }, 
  });

const Header = () => {

    const theme = useTheme();

    const [anchorElNav, setAnchorElNav] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();
  
    const handleNavigation = (sectionId) => {
      if (sectionId.page === 'All Photos') {
        navigate('/photos')
      }
      else {
        if (location.pathname === '/') {
            const section = document.getElementById(sectionId.page);
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/', { state: { scrollToSection: sectionId.page } });
            setTimeout(() => {
                const section = document.getElementById(sectionId.page);
                console.log(section)
                console.log(sectionId)
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
           }
        }
    };
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    const handleCloseAndNav = (sectionID) => {
        handleCloseNavMenu()
        handleNavigation(sectionID);
    }
  
    return (
        <ThemeProvider theme={localTheme}>
            <AppBar position="sticky" >
                <Container maxWidth="xxl" sx={{margin: 0}}>
                    <Toolbar disableGutters >          
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            >
                            <MenuIcon />
                            </IconButton>
                            <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                            >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => handleCloseAndNav({page})} divider={true}>
                                <Typography textAlign="center"
                                sx={{fontFamily: 'Caveat'}}>{page}</Typography>
                                </MenuItem>
                            ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Caveat',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>LS Photography</Link>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleNavigation({page})}
                                sx={{ my: 2, 
                                    color: 'white', 
                                    display: 'block', 
                                    fontFamily: 'Caveat', 
                                    fontSize: '1.4rem', 
                                    letterSpacing: '.3rem',
                                    marginRight: '1.4rem', 
                                    fontWeight: 600}}
                            >
                                {page}
                            </Button>
                            ))}
                        </Box>
                        <Typography
                            variant="h4"
                            noWrap
                            sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Caveat',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            alignSelf: 'right'
                            }}
                        >
                          <Link to='/' style={{ textDecoration: 'none', color: 'white'  }}>LS Photography</Link>
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;