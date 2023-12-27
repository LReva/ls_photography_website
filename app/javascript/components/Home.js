import React from 'react';
import PhotoCarousel from './PhotoCarousel';
import AboutMe from './AboutMe';


const Home = () => {
    return (
        <div>
            <PhotoCarousel/>
            <h2>About</h2>
            <AboutMe/>
            <h2>See More!</h2>
        </div>
    );
};

export default Home;