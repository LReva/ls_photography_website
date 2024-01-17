import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../components/App';

document.addEventListener('DOMContentLoaded', () => {
    const root = createRoot(document.getElementById("react-root"));
    const imagePath = require.context('../images', true)
    const faviconPath = imagePath('./favicon.png')
    if (root) {
        root.render(<App />);
      }
  });