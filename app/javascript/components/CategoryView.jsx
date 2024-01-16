import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import CategoryPhotoCarousel from './CategoryPhotoCarousel';
import PhotoGrid from './PhotoGrid';
import {all_category_photos_loader} from '../categorized_photos.js'


const CategoryView = ({category}) => {
    const location = useLocation();
    const currentLocation = location.pathname
    const [images, setImages] = useState([]);
    const [maxSteps, setMaxSteps] = useState(0)
  
    useEffect(() => {
      const fetchCategoryPhotos = async (category_id) => {
        const result = await all_category_photos_loader(category_id);
        setImages(result);
        setMaxSteps(result.length)
        }
        fetchCategoryPhotos(category.id);
    }, [])

    return (
        <div>
            <CategoryPhotoCarousel images={images} maxSteps={maxSteps}/>
            <hr/>
            <h1> See the beauty of {category.name}</h1>
            <PhotoGrid images={images} parentLocation={currentLocation}/>
        </div>
    );
};

export default CategoryView;