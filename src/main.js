import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';
import { galleryEl } from './js/render-functions';
import { renderImages } from './js/render-functions';

const searchForm = document.querySelector('.js-search');
let cover = document.querySelector('.cover-loading');

searchForm.addEventListener('submit', handleSearchSubmit);

async function handleSearchSubmit(ev) {
  ev.preventDefault();

  const query = ev.target.elements.query.value;
  window.addEventListener('load', () => {
    if (query === '') {
      iziToast.show({
        title: 'Error',
        message: `Please enter a search query!`,
        position: 'topRight',
        color: '#da1418',
        timeout: 2000,
      });
      return;
    } else {
      cover.classList.remove('hidden');
    }
  });

  galleryEl.innerHTML = '';

  try {
    const data = await fetchImages(query);
    if (data.hits.length === 0) {
      iziToast.show({
        title: 'Error',
        message: `Sorry, there are no images matching your search query. Please try again!`,
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
    cover.classList.add('hidden');
  }
}
