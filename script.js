const slides = document.querySelectorAll('.slide')

slides.forEach(el => el.addEventListener('click', (e) => {
  const haveActive = el.classList.contains('active')
  clearActiveClass()
  addActiveClass(e.target, haveActive)
}))

function clearActiveClass() {
  slides.forEach(el => {
    el.classList.remove('active')
  })
}

function addActiveClass(el, haveActive) {
  if (!haveActive) {
    el.classList.add('active')
  }
}