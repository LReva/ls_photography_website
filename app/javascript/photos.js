export async function all_photo_loader() {
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