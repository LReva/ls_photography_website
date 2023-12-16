export default async function all_photo_loader() {
  try {
    const response = await fetch("/api/v1/photos");
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
    // Fetch a single photo by ID (replace :id with an actual photo ID) - to be added
  //   fetch("/api/v1/photos/:id")
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data); // Handle the data as needed
  //     });
  // });
