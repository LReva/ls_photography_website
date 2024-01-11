import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import PhotoGrid from './PhotoGrid';
import {all_photo_loader} from '../photos.js'


const AllPhotosView = () => {
    const location = useLocation();
    const currentLocation = location.pathname
    const [images, setImages] = useState([]);
    const [imagesNames, setImageNames] = useState([]);
    const imagesContext = require.context('images', true, /\.(JPE?G)$/);
  
    function importImages(imageNames) {
      const imagesHere = imageNames.map(name => {
        const imagePath = `./${name}`;
        try {
          return imagesContext(imagePath);
        } catch (e) {
          console.warn(`Image not found: ${imagePath}`);
          return null;
        }
      });
      return imagesHere.filter(Boolean);
    }
  
    useEffect(() => {
      const fetchPhotos = async () => {
        const result = await all_photo_loader();
        const importedImages = importImages(result.map(image => image.photo_data));
        setImageNames(importedImages);
        setImages(result);
        }
        fetchPhotos();
    }, [])

    return (
        <div>
            <PhotoGrid images={images} imagesNames={imagesNames} parentLocation={currentLocation}/>
        </div>
    );
};

export default AllPhotosView;