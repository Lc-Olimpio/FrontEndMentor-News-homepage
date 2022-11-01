const openmenuButton = document.querySelector('#openMenuButton')
const closemenuButton = document.querySelector('#closeMenuButton')
const menu = document.querySelector('#menu')
const body = document.querySelector('#body')

openmenuButton.onclick = () => {
  body.classList.add('darken')
  menu.classList.add('active')
}

closemenuButton.onclick = () => {
  body.classList.remove('darken')
  menu.classList.remove('active')
}