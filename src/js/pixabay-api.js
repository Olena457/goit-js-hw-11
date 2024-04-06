export async function fetchImages(query) {
  const URL_BASE = 'https://pixabay.com';
  const ENDPOINT = '/api/';
  const API_KEY = '?key=43261756-f7e91f342fa994673ba6d269c';
  const OTHERS_PARAMS = `&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  const url = URL_BASE + ENDPOINT + API_KEY + OTHERS_PARAMS;
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return await resp.json();
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
