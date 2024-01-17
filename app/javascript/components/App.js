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
  const [categorySamplePhotos, setCategorySamplePhotos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchCategorySamplePhotos = async () => {  
      const result = await all_category_sample_loader();
      setCategorySamplePhotos(result);
      setCategories(result.map(categorySamplePhoto => categorySamplePhoto.category))
      }
      fetchCategorySamplePhotos();
  }, [])

  useEffect(() => { 
    const fetchPhotos = async () => {  
      const result = await all_photo_loader();
      setPhotos(result);
      }
      fetchPhotos();
  }, [])

  return (
    <Router>
      <div id="page-container">
        <div id="content-wrap">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home photos={photos} categorySamplePhotos={categorySamplePhotos}/>} />
            <Route exact path="/photos" element={<AllPhotosView photos={photos} />} />
            {categories.map((category) => (
              <Route key={category.name} path={`/${category.name}`} element={<CategoryView category={category}/>} />
            ))}
            {photos.map((photo, index) => (
              <Route key={index} 
                    path={`/photos/${photo.id}`} 
                    element={<PhotoView photo={photo}  />} />
            ))}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;