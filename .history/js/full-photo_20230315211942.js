// import './thumbnails.js';


const photoDescription = fullPhotoContainer.querySelector('.likes-count');


const createFullPhoto = (element) => {
  //const likesCount = element.querySelector('.picture__likes').textContent;
  const fullPhotoContainer = document.querySelector('.big-picture__preview');
  const fullPhoto = fullPhotoContainer.querySelector('big-picture__img > img');
  fullPhoto.src = element.querySelector('.picture__img').src;
  //photoDescription.textContent = likesCount;
  // fullPhoto.src = element.src;
  console.log(fullPhotoContainer);
};

// const createFullPhoto = (({url, comments, likes}) => {
//   fullPhoto.querySelector('.picture__img').src = url;
//   fullPhoto.querySelector('.picture__comments').textContent = comments.length;
//   fullPhoto.querySelector('.picture__likes').textContent = likes;
//   return fullPhoto;
// });

export {createFullPhoto};

/* const createThumbnail = (({url, comments, likes}) => {
  fullPhoto.src = url;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoElement.querySelector('.picture__likes').textContent = likes;
  return photoElement;
});

<img class="picture__img" src="photos/1.jpg" width="182" height="182" alt="Случайная фотография"></img> */