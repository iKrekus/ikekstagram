import './thumbnails.js';

const bigPicture = document.querySelector('.big-picture');
const likes = document.querySelector('.likes-count');
const comments = document.querySelector('.comments-count');
const commentBox = document.querySelector('.social__comments');
const description = document.querySelector('.social__caption');
// const pictureContainer = document.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const onClickPitueresList = function() {
  console.log('+');
};

const userModalOpenElement = document.querySelector('.picture');


userModalOpenElement.addEventListener('click', () => {
  console.log('R');
  // userModalElement.classList.remove('hidden');
});


// function onClickPitueresList () {
//   // if (evt.target.matches('.picture')) {
//     console.log('+');
//     // bigPicture.classList.remove('hidden');
//   // }
// }

document.addEventListener('ckick', onClickPitueresList);

const selectedCategoryContainer = document.querySelector('#selected-category');

const form = document.querySelector('form');

function onFilterChange (evt) {
  if (evt.target.matches('input[type="radio"]')) {
    selectedCategoryContainer.textContent = evt.target.value;
  }
}

form.addEventListener('change', onFilterChange);
