import '../css/style.scss'

document.addEventListener('click', (event) => {
  const target = event.target

  if (target.matches('[data-toggle="popup"]')) {
    showPopup(target)
  } else if (target.matches('[data-dismiss="popup"]') || target.classList.contains('popup__container')) {
    hidePopup(target)
  }

  if (target.matches('[data-action="uninstall"]')) {
    setTimeout(() => alert('Done!'), 300)
  }
})

function showPopup(target) {
  const popup = document.getElementById(target.dataset.target)
  popup.classList.add('popup__block')
}

function hidePopup(target, alert) {
  const popup = target.closest('.popup__mask')
  popup.classList.remove('popup__block')
}
