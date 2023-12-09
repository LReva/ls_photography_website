ument.addEventListener("DOMContentLoaded", () => {
    // Fetch a single category by ID (replace :id with an actual category ID) - to be adjusted
    fetch("/api/v1/categorized_photos/:id")
      .then(response => response.json())
      .then(data => {
        console.log(data); // Handle the data as needed
      });
  });
  