import React from 'react';
import { useLocation } from 'react-router-dom';
import PhotoGrid from './PhotoGrid';


const AllPhotosView = ({photos, imagePaths}) => {
    const location = useLocation();
    const currentLocation = location.pathname

    return (
        <div>
            <PhotoGrid images={photos} imagesNames={imagePaths} parentLocation={currentLocation}/>
        </div>
    );
};

export default AllPhotosView;