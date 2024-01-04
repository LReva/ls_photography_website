export async function all_category_sample_loader() {
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

export async function active_category_loader() {
  try {
    const response = await fetch("/api/v1/categorized_photos");
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const categories = data.map(photo_item => photo_item.category)
    return categories;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
}

export async function all_category_photos_loader(category_id) {
  try {
    const response = await fetch(`/api/v1/categorized_photos/${category_id}`);
    console.log(response)
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
    // fetch("/api/v1/categorized_photos/:id")
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data); // Handle the data as needed
    //   });