document.addEventListener("DOMContentLoaded", (event) => {

    // seleccionar los elementos del menu 
    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".menu-mobile");
// funcion mostrar/ocualtar
const showHiddenMenu = () =>{
    let show = document.querySelector(".menu-mobile--show");

        if (show) {
            mobile_menu.classList.remove("menu-mobile--show");
        } else {
            mobile_menu.classList.add("menu-mobile--show");
        }
}

    // mostrar el menu al clickar en boton
    mobile_btn.addEventListener("click", showHiddenMenu);

    // cuando redimensiono la pantalla por encima de 1000px ocultar el menu si es necesario
    window.addEventListener("resize", () => {
        let window_width = parseInt(document.body.clientWidth);

        if (window_width >= 1000) {
            mobile_menu.classList.remove("menu-mobile--show");
        }
    })
    // cerrar el menú al clickar en la x

let btnClolse = document.querySelector(".menu-mobile__close");

btnClolse.addEventListener("click",showHiddenMenu)

})


