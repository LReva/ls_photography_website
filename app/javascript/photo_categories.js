ument.addEventListener("DOMContentLoaded", () => {
    fetch("/api/v1/photo_categories")
      .then(response => response.json())
      .then(data => {
        console.log(data); // Handle the data as needed
      });
  
    // Fetch a single category by ID (replace :id with an actual category ID) - to be adjusted
    fetch("/api/v1/photo_categories/:id")
      .then(response => response.json())
      .then(data => {
        console.log(data); // Handle the data as needed
      });
  });
  