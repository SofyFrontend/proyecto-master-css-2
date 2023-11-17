document.addEventListener("DOMContentLoaded", (event) => {

    // seleccionar los elementos del menu 
    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".menu-mobile");

    // mostrar el menu al clickar en boton
    mobile_btn.addEventListener("click", ()=>{
        let show = document.querySelector(".menu-mobile--show");

        if (show) {
            mobile_menu.classList.remove("menu-mobile--show");
        } else {
            mobile_menu.classList.add("menu-mobile--show");
        }
    });

})

