
const menuToggle = document.querySelector('#menu-toggle')
const close = document.querySelector('#btn-close')
const menuHeader = document.querySelector('.menu')

menuToggle.addEventListener('click', () => {
    menuHeader.classList.toggle('menuToggle')
    
    menuToggle.classList.add('menu-none')
    close.classList.add('close-open')
})

close.addEventListener('click', () => {
    menuHeader.classList.remove('menuToggle')
    menuToggle.classList.remove('menu-none')
    close.classList.remove('close-open')
})


// ========= theme =========
const buttonDarkTheme = document.querySelector('#dark-theme')
const buttonLightTheme = document.querySelector('#light-theme')

buttonDarkTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark')

    buttonDarkTheme.classList.toggle('dark-none')
    buttonLightTheme.classList.toggle('ligth-open')
})

buttonLightTheme.addEventListener('click', () => {
    document.body.classList.remove('dark')

    buttonDarkTheme.classList.remove('dark-none')
    buttonLightTheme.classList.remove('ligth-open')
})


























