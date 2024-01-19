import React from 'react';
import { useLocation } from 'react-router-dom';
import PhotoGrid from './PhotoGrid';


const AllPhotosView = ({photos}) => {
    const location = useLocation();
    const currentLocation = location.pathname

    return (
        <section id='All Photos'>
            <div>
                <PhotoGrid images={photos} parentLocation={currentLocation}/>
            </div>
        </section>
    );
};

export default AllPhotosView;