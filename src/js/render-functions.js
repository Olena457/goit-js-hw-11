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
    <a class="gallery-link" href="${largeImageURL}">
    <img class="gallery-image" src="${webformatURL}" alt="${tags}">
    </a>
    <div class='caption'>
    <p class='caption-item'>
      <b>Likes</b>
      ${likes}
    </p>
    <p class='caption-item'>
      <b>Views</b>
      ${views}
    </p>
    <p class='caption-item'>
      <b>Comments</b>
      ${comments}
    </p>
    <p class='caption-item'>
      <b>Downloads</b>
      ${downloads}
    </p>
  </div>
    </li>`;
    }
  );
  galleryEl.insertAdjacentHTML('beforeend', markup.join(''));
}
