import {picturesDataList} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import {userModalOpenElement, openModal} from './modal.js';
import {fileField, openForm} from './form.js';

renderThumbnails(picturesDataList);

fileField.addEventListener('change', openForm);

userModalOpenElement.addEventListener('click', (evt) => {
  openModal(evt);
});
