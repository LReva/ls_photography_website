import React from 'react';
import PhotoCarousel from './PhotoCarousel';
import AboutMe from './AboutMe';
import CategoriesGrid from './CategoriesGrid';


const Home = () => {
    return (
        <div>
            <PhotoCarousel/>
            <section id="About">
                <h2>About</h2>
                <AboutMe/>
            </section>
            <section id="Categories">
                <h2>See More!</h2>
                <CategoriesGrid/>
            </section>
        </div>
    );
};

export default Home;