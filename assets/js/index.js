
// ---------- THEME&MOBILE.JS ----------
import { menuToggle, darkTheme } from "./theme&mobile.js";

// ---------- MENU-CATALOG.JS ----------
import { menu, filterDishes, display } from "./menuCatalog.js";

// ---------- REVIEW.JS ----------
import { showPerson } from "./review.js";

// ---------- MENU/FILTROS ----------
window.addEventListener('DOMContentLoaded', () => {
    display(menu)
    filterDishes()
})



const sr =  ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 200,
    reset: true,
})

sr.reveal('.imgHome')
sr.reveal('.title-home', {origin: 'bottom'})
sr.reveal('.about-img', {origin: 'left'})
sr.reveal('.text-about', {origin: 'right'})
sr.reveal('.container-slider', {origin: 'right'})
sr.reveal('.email-container', {origin: 'left'})
sr.reveal('.footer',)













