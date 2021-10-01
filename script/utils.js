const toggler = document.querySelector('.toggler')
const menu = document.querySelector('.nav-menu')

const toggle = (button, collapsible) => {
  button.addEventListener('click', () => {
    collapsible.classList.toggle('toggled')
    button.classList.toggle('toggled')
  })
}

toggle(toggler, menu)
