import '../css/style.scss';

document.addEventListener('click', (event) => {
  const target = event.target;

  if (target.matches('[data-toggle="popup"]')) {
    showPopup(target);
  }
})

function showPopup(target) {
  const popup = document.getElementById(target.dataset.target)
  popup.classList.add('popup__block')
}
