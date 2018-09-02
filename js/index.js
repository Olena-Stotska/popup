import '../css/style.scss'

document.addEventListener('click', (event) => {
  const target = event.target

  if (target.matches('[data-toggle="popup"]')) {
    showPopup(target)
  } else if (target.matches('[data-dismiss="popup"]')) {
    hidePopup(target)
  }
})

function showPopup(target) {
  const popup = document.getElementById(target.dataset.target)
  popup.classList.add('popup__block')
}

function hidePopup(target) {
  const popup = target.closest('.popup__mask')
  popup.classList.remove('popup__block')
}
