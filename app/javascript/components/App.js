import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import AllPhotosView from './AllPhotosView.jsx';
import CategoryView from './CategoryView';
import {active_category_loader} from '../categorized_photos.js'

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {  
      const result = await active_category_loader();
      setCategories(result);
      }
      fetchCategories();
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
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
