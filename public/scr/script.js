let bullets = document.querySelectorAll(".bullet");
let generator = document.querySelector(".cocktailgenerator")
let nombre = document.querySelector(".Name");
let logo = document.querySelector(".logo")
let menu = document.querySelector(".navigation")
let menuOpened = false;
let ventanaPequena = window.matchMedia("(max-width: 750px)");
if (ventanaPequena.matches) {

    menu.style.display = "none"
    menu.style.opacity = "0"
}

//metodo que ejecuta cada vez que se da click en alguno de los botones de Cocktail generator

for (let index = 0; index < bullets.length; index++) {
    bullets[index].addEventListener("click", function () {

        switch (index) {

            case 0:
                generator.style.backgroundImage = 'url("./data/mojito1.png")';
                nombre.style.opacity = "0"
                setTimeout(function () {
                    nombre.style.opacity = "1"
                    nombre.innerHTML = "Frambuesa"
                }, 1000)

                break;
            case 1:
                generator.style.backgroundImage = 'url("./data/mojito2.png")';
                nombre.style.opacity = "0"
                setTimeout(function () {
                    nombre.style.opacity = "1"
                    nombre.innerHTML = "Limón"
                }, 1000)
                break;
            case 2:
                generator.style.backgroundImage = 'url("./data/mojito3.png")';
                nombre.style.opacity = "0"
                setTimeout(function () {
                    nombre.style.opacity = "1"
                    nombre.innerHTML = "Mora Azul"
                }, 1000)
                break;
            case 3:
                generator.style.backgroundImage = 'url("./data/mojito4.png")';
                nombre.style.opacity = "0"
                setTimeout(function () {
                    nombre.style.opacity = "1"
                    nombre.innerHTML = "Naranja"
                }, 600)
                break;


        }
    })
}


//metodo que abre el menu hamburguesa cuando se da click en el logo


logo.addEventListener("click", function () {
    menuOpened = !menuOpened

    ventanaPequena = window.matchMedia("(max-width: 750px)");
    if (ventanaPequena.matches) {
        if (menuOpened) {

            menu.style.display = "flex"

            setTimeout(function () {
                menu.style.opacity = "1"
            }, 1)

        } else if (menuOpened == false) {

            menu.style.opacity = "0"

            setTimeout(function () {

                menu.style.display = "none"
            }, 500)

        }
    }

})


window.addEventListener('resize', function () {

    if (ventanaPequena.matches == false) {

        menu.style.display = "flex"
        menu.style.opacity = "1"
        menuOpened = false;

    }

    if (ventanaPequena.matches && menuOpened == false) {
        menu.style.display = "none"
        menu.style.opacity = "0"
    }

});