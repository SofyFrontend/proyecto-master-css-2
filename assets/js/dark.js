document.addEventListener("DOMContentLoaded", () => {
    let switcher = document.querySelector(".swicher-btn");
    let light = document.querySelector(".swicher__icon-light");
    let dark = document.querySelector(".swicher__icon-dark");

    switcher.addEventListener("click", () => {
        let head = document.head;

        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "assets/css/dark.css";
        link.id = "theme-dark";

        let theme_dark = document.querySelector("#theme-dark")
        if (theme_dark) {
            head.removeChild(theme_dark);
            dark.style.display="none";
            light.style.display="block";

        } else {
            head.appendChild(link);
            dark.style.display="block";
            light.style.display="none";
        }
    })
})