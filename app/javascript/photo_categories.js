  export default async function all_category_loader() {
    try {
      const response = await fetch("/api/v1/categorized_photos");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching photos:", error);
      throw error;
    }
  }

      // Fetch a single category by ID (replace :id with an actual category ID) - to be adjusted
      // fetch("/api/v1/photo_categories/:id")
      // .then(response => response.json())
      // .then(data => {
      //   console.log(data); // Handle the data as needed
      // });