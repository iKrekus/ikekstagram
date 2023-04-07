import './thumbnails.js';
import {picturesDataList} from './data.js';


const fullPhotoContainer = document.querySelector('.big-picture__preview');
const fullPhoto = fullPhotoContainer.querySelector('.big-picture__img > img');
const likesCount = fullPhotoContainer.querySelector('.likes-count');
const photoDescription = fullPhotoContainer.querySelector('.social__caption');
const commentsCount = fullPhotoContainer.querySelector('.comments-count');
const commentsArea = fullPhotoContainer.querySelector('.social__comments');
const commentsCountSohown = document.querySelector('.social__comment-count');
const loadMoreComment = document.querySelector('.comments-loader');
const ADD_COMMENTS_COUNT = 5;

// let commentsShown = 0;

const commentContent = document.createDocumentFragment();
const commentsCreator = (comments) => {

  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    const commentItem = document.createElement('li');
    const commentItemImage = document.createElement('img');
    const commentItemDescription = document.createElement('p');
    commentItem.classList.add('social__comment');
    commentItemImage.classList.add('social__picture');
    commentItemImage.setAttribute('src', comment.avatar);
    commentItemImage.setAttribute('alt', comment.name);
    commentItemImage.setAttribute('width', 35);
    commentItemImage.setAttribute('height', 35);
    commentItem.append(commentItemImage);
    commentItemDescription.classList.add('social__text');
    commentItemDescription.textContent = comment.comment;
    commentItem.append(commentItemDescription);
    commentContent.append(commentItem);
  }
  return commentContent;
};

const getMoreComments = (fullComments, sliced, count) => {
  if(sliced.length > fullComments.length) {
    return fullComments.reverse();
  }
  return fullComments.reverse().slice(sliced.length, sliced.length + count);
};

const renderComments = (comments) => {
  let slicedComments = [];
  slicedComments = [...slicedComments, ...getMoreComments(comments, slicedComments, 5)];
  if(loadMoreComment) {
    loadMoreComment.addEventListener('click', () => {
      slicedComments = [...slicedComments, ...getMoreComments(comments, slicedComments, 5)];
      console.log(slicedComments);
    });
  }
  const content = commentsCreator(slicedComments);
  commentsArea.innerHTML = '';
  commentsArea.append(content);
  switch (true) {
    case slicedComments.length === comments.length:
      loadMoreComment && loadMoreComment.classList.add('hidden');
      break;
    default:
      loadMoreComment && loadMoreComment.classList.remove('hidden');
  }
};


/* const renderComments = (comments) => {
  console.log(comments);
  console.log(comments.length);
  commentsShown += ADD_COMMENTS_COUNT;
  if (commentsShown >= comments.length) {
    commentsShown = comments.length;
    loadMoreComment.classList.add('hidden');
    console.log('IF USED');
  } else {
    console.log('ELSE USED');
    loadMoreComment.classList.remove('hidden');
    commentsCreator(comments);
  }
  loadMoreComment.addEventListener('click', commentsCreator.bind(comments));
  commentsArea.innerHTML = '';
  commentsArea.append(commentContent);
  console.log(commentContent);
};
 */

// const loadMore = () => {

// };


const createFullPhoto = (element) => {
  const [data] = picturesDataList.filter((picture) => picture.id === element.dataset.thunailId);
  fullPhoto.setAttribute('src', data.src);
  photoDescription.textContent = data.description;
  likesCount.textContent = data.likes;
  commentsCount.textContent = data.comments.length;
  commentsArea.innerHTML = '';
  const comments = data.comments;
  renderComments(comments);
};

export {createFullPhoto};