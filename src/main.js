import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// import css from './style.css';
// console.log(css);
import { fetchImages } from './js/pixabay-api';
import { galleryEl } from './js/render-functions';
import { renderImages } from './js/render-functions';

const searchForm = document.querySelector('.js-search');
const loaderEl = document.querySelector('.loader');

searchForm.addEventListener('submit', handleSearchSubmit);

async function handleSearchSubmit(ev) {
  ev.preventDefault();

  const query = ev.target.elementsr;

  galleryEl.innerHTML = '';
  loaderEl.classList.remove('hidden');
  try {
    const data = await fetchImages(query);
    if (data.hits.length === 0 || query === '') {
      iziToast.show({
        title: 'Error',
        message: `"Sorry, there are no images matching your search query. Please try again!"`,
        position: 'topRight',
        color: '#da1418',
        timeout: 2000,
      });
    } else {
      renderImages(data.hits);
    }
  } catch (error) {
    iziToast.show({
      title: 'Error',
      message: `Sorry, there are no images matching your search query. Please try again!`,
      position: 'topRight',
      color: '#da1418',
      timeout: 2000,
    });
  } finally {
    loaderEl.classList.add('hidden');
  }
}
