import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import CategoryPhotoCarousel from './CategoryPhotoCarousel';
import PhotoGrid from './PhotoGrid';
import {all_category_photos_loader} from '../categorized_photos.js'


const CategoryView = ({category}) => {
    const location = useLocation();
    const currentLocation = location.pathname
    const [images, setImages] = useState([]);
    const [imagesNames, setImageNames] = useState([]);
    const [maxSteps, setMaxSteps] = useState(0)
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
      const fetchCategoryPhotos = async (category_id) => {
        const result = await all_category_photos_loader(category_id);
        const importedImages = importImages(result.map(image => image.photo_data));
        setImageNames(importedImages);
        setImages(result);
        setMaxSteps(importedImages.length)
        }
        fetchCategoryPhotos(category.id);
    }, [])

    return (
        <div>
            <CategoryPhotoCarousel images={images} imagesNames={imagesNames} maxSteps={maxSteps}/>
            <hr/>
            <h1> See the beauty of {category.name}</h1>
            <PhotoGrid images={images} imagesNames={imagesNames} parentLocation={currentLocation}/>
        </div>
    );
};

export default CategoryView;