const imagesContext = require.context('images', true, /\.(JPE?G)$/);

export function importImages(imageNames) {
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


export function importImage(name) {
  try {
    return imagesContext(`./${name}`)
  } catch (e) {
    console.warn(`Image not found: ${name}`);
    return null;
  }
}