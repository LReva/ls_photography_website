import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PhotoCarousel from './PhotoCarousel';
import AboutMe from './AboutMe';
import CategoriesGrid from './CategoriesGrid';


const Home = () => {
    const handleNavigation = (url) => {
        window.location.href = url; 
      };
  
    return (
        <div>
            <PhotoCarousel/>
            <section id="About">
                <h2>About</h2>
                <AboutMe/>
            </section>
            <section id="Categories">
                <h2>Categories</h2>
                <CategoriesGrid/>
            </section>
            <section id="Find more">
                <h2>Find more!</h2>

                <p>If you've been mesmerized by the stunning imagery showcased here, we've got exciting news for you! Our photographic journey extends far beyond this gallery. Venture into a broader world of breathtaking landscapes, enchanting wildlife, and mesmerizing natural scenes by visiting our collections on renowned stock photo websites.</p>

                <p>Whether you're seeking inspiration, contemplating purchasing, or simply wish to lose yourself in the beauty of nature, these additional platforms offer an expansive array of our works. Just click on the links provided below and let your journey through our lens continue!</p>

                <Box sx={{display:'flex', justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' }, margin: '1em', alignItems: 'center'}}>
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
                             onClick={() => handleNavigation("https://www.shutterstock.com/g/Lena+Scott")}>Shutterstock Portfolio</Button>
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
                            onClick={() => handleNavigation("https://stock.adobe.com/contributor/211711355/Lena%20Scott")}>Adobe Stock Portfolio</Button>
                </Box>
            </section>
        </div>
    );
};

export default Home;