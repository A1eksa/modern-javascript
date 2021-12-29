const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const popupClose = document.querySelector('.popup-wrapper');

button.addEventListener('click', () => {
  popup.style.display = 'block';
});

popupClose.addEventListener('click', () => {
  popupClose.style.display = 'none';
});
