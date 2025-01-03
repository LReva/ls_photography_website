import React from 'react';
import { useLocation } from 'react-router-dom';
import PhotoGrid from './PhotoGrid';
import {useScrollToTop} from './helpers.jsx'

const AllPhotosView = ({photos}) => {
    const location = useLocation();
    const currentLocation = location.pathname
    useScrollToTop()

    return (
        <section id='All Photos'>
            <div>
                <PhotoGrid photos={photos} parentLocation={currentLocation}/>
            </div>
        </section>
    );
};

export default AllPhotosView;