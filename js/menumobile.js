// Seleccionamos el botón de menú (el contenedor de las barras)
const menu_btn = document.querySelector('.menu_btn')

// Seleccionamos el icono dentro del botón de menú (el icono de las barras)
const menu_btnIcon = document.querySelector('.menu_btn i')

// Seleccionamos el menú móvil (el contenedor que se mostrará u ocultará)
const mobile_menu = document.querySelector('.mobile_menu')

// Asignamos una función al evento de clic del botón de menú
menu_btn.onclick = function () {
    // Alternamos la clase 'open' en el menú móvil. Si está abierta, la cerramos, si está cerrada, la abrimos.
    mobile_menu.classList.toggle('open')

    // Comprobamos si el menú tiene la clase 'open' (es decir, si está abierto)
    const isOpen = mobile_menu.classList.contains('open')

    // Cambiamos el icono en el botón de menú: 
    // Si el menú está abierto, mostramos la 'X', si está cerrado, mostramos las barras
    menu_btnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'  // Si el menú está abierto, mostramos la 'X'
        : 'fa-solid fa-bars'   // Si el menú está cerrado, mostramos las barras
}
