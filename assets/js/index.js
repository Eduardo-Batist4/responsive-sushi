
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


















