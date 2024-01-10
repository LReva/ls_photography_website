import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import AllPhotosView from './AllPhotosView.jsx';
import CategoryView from './CategoryView';
import PhotoView from './PhotoView.jsx';
import {active_category_loader} from '../categorized_photos.js'
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
    const fetchCategories = async () => {  
      const result = await active_category_loader();
      setCategories(result);
      }
      fetchCategories();
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
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/photos" element={<AllPhotosView/>} />
        {categories.map(category => (
          <Route key={category.name} path={`/${category.name}`} element={<CategoryView category={category}/>} />
        ))}
        {photos.map((photo, index) => (
          <Route key={index} 
                 path={`/photos/${photo.id}`} 
                 element={<PhotoView photo={photo} 
                           photoPath={imagePaths[index]} 
                           index={index} 
                           photos={photos}
                           imagePaths={imagePaths}/>} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
