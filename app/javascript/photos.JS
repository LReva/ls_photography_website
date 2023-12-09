document.addEventListener("DOMContentLoaded", () => {
    fetch("/api/v1/photos")
      .then(response => response.json())
      .then(data => {
        console.log(data); // Handle the data as needed
      });
  
    // Fetch a single photo by ID (replace :id with an actual photo ID) - to be added
    fetch("/api/v1/photos/:id")
      .then(response => response.json())
      .then(data => {
        console.log(data); // Handle the data as needed
      });
  });
  