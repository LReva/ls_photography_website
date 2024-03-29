import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PhotoCarousel from './PhotoCarousel';
import AboutMe from './AboutMe';
import CategoriesGrid from './CategoriesGrid';
import ButtonLink from './ButtonLink';


const Home = ({photos, categorySamplePhotos}) => {
  
    return (
        <div>
            <PhotoCarousel allPhotos={photos}/>
            <section id="About">
                <h2>About</h2>
                <AboutMe/>
            </section>
            <section id="Categories">
                <h2>Categories</h2>
                <CategoriesGrid categorySamplePhotos={categorySamplePhotos}/>
            </section>
            <section id="Find more">
                <h2>Find more!</h2>

                <p>If you've been mesmerized by the stunning imagery showcased here, we've got exciting news for you! Our photographic journey extends far beyond this gallery. Venture into a broader world of breathtaking landscapes, enchanting wildlife, and mesmerizing natural scenes by visiting our collections on renowned stock photo websites.</p>

                <p>Whether you're seeking inspiration, contemplating purchasing, or simply wish to lose yourself in the beauty of nature, these additional platforms offer an expansive array of our works. Just click on the links provided below and let your journey through our lens continue!</p>

                <Box sx={{display:'flex', justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' }, margin: '1em', alignItems: 'center'}}>
                    <ButtonLink url="https://www.shutterstock.com/g/Lena+Scott" buttonName="Shutterstock Portfolio"/>
                    <ButtonLink url="https://stock.adobe.com/contributor/211711355/Lena%20Scott" buttonName="Adobe Stock Portfolio"/>
                </Box>
            </section>
        </div>
    );
};

export default Home;