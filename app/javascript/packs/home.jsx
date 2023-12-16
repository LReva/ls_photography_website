import React from 'react';
import PhotoCarousel from '../components/PhotoCarousel';
import AboutMe from '../components/AboutMe';
import { createRoot } from 'react-dom/client';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.body.appendChild(document.createElement('div'));
    const root = createRoot(container);
    root.render(
      <div>
        <PhotoCarousel/>
        <h2>About</h2>
        <AboutMe/>
        <h2>See More!</h2>
      </div>);
  });