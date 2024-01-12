import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import AllPhotosView from './AllPhotosView.jsx';
import CategoryView from './CategoryView';
import PhotoView from './PhotoView.jsx';
import {all_category_sample_loader} from '../categorized_photos.js';
import { all_photo_loader } from '../photos.js';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [imagePaths, setImagePaths] = useState([]);
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
    const fetchCategorySample = async () => {  
      const result = await all_category_sample_loader();
      setCategories(result);
      }
      fetchCategorySample();
  }, [])

  useEffect(() => { 
    const fetchPhotos = async () => {  
      const result = await all_photo_loader();
      setPhotos(result);
      const importedImages = importImages(result.map(image => image.photo_data))
      setImagePaths(importedImages)
      }
      fetchPhotos();
  }, [])

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home photos={photos} imagePaths={imagePaths} categories={categories}/>} />
        <Route exact path="/photos" element={<AllPhotosView photos={photos} imagePaths={imagePaths}/>} />
        {categories.map(category => (
          <Route key={category.category.name} path={`/${category.category.name}`} element={<CategoryView category={category.category}/>} />
        ))}
        {photos.map((photo, index) => (
          <Route key={index} 
                 path={`/photos/${photo.id}`} 
                 element={<PhotoView photo={photo} 
                           photoPath={imagePaths[index]}  />} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;