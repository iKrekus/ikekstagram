import {renderThumbnails} from './thumbnails.js';
import {fileField, openForm, closeForm, setOnFormSubmit} from './form.js';
import {getData, sendData} from './api.js';
import {showAlert} from './utils.js';
import './modal.js';


fileField.addEventListener('change', openForm);

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    closeForm();
  } catch {

  }
})
try {
  const data = await getData();
  renderThumbnails(data);
  // createFullPhoto(data);
} catch (err) {
  showAlert(err.message);
}
