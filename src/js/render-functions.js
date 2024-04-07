// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

export const galleryEl = document.querySelector('.gallery');
export function renderImages(images) {
  const markup = images.map(
    ({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => {
      return ` 
      <li class="gallery-item">
      <span class="loader hidden"></span>
    <a class="gallery-link" href="${largeImageURL}">
    <img class="gallery-img" src="${webformatURL}" alt="${tags}">
    <div class="image-description">
    <p>likes: ${likes}</p>
    <p>views: ${views}</p>    
    <p>comments: ${comments}</p>
    <p>downloads: ${downloads}</p> 
    </div>
    </a>
    </li>`;
    }
  );
  galleryEl.insertAdjacentHTML('beforeend', markup.join(''));
}
const lightbox = new SimpleLightbox('.gallery a');
lightbox.refresh();

// galleryEl.addEventListener('click', event => {
//   if (event.target.classList.contains('gallery-img')) {
//     event.preventDefault();
//     lightbox.open();
//   }
// });
