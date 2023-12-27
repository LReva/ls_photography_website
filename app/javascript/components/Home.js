import React from 'react';
import PhotoCarousel from './PhotoCarousel';
import AboutMe from './AboutMe';


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
            </section>
        </div>
    );
};

export default Home;