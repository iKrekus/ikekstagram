import {photoArchive} from './data.js';

const pictures = document.querySelector('.pictures');
const photosTemplate = document.querySelector('#picture').content;


const similarPhotos = photoArchive(25);

const similarPhoto = pictures.createDocumentFragment();

similarPhotos.forEach(({url, comments, likes}) => {
  const photoElement = photosTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').innerHTML = comments;
  photoElement.querySelector('.picture__likes').textContent = likes;
  similarPhoto.appendChild(photoElement);
});


// const similarListElement = pictures.querySelector('.setup-similar-list');
// const similarWizardTemplate = document.querySelector('#similar-wizard-template')
//   .content
//   .querySelector('.setup-similar-item');

//

// const similarListFragment = document.createDocumentFragment();

// randomPhotos.forEach(({name, coatColor, eyesColor}) => {
//   const wizardElement = similarWizardTemplate.cloneNode(true);
//   wizardElement.querySelector('.setup-similar-label').textContent = name;
//   wizardElement.querySelector('.wizard-coat').style.fill = coatColor;
//   wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor;
//   similarListFragment.appendChild(wizardElement);
// });

// similarListElement.appendChild(similarListFragment);
