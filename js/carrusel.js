let slider = document.querySelector('.contenedor-carrusel .lista');
let items = document.querySelectorAll('.contenedor-carrusel .lista .foto');
let next = document.getElementById('siguiente');
let prev = document.getElementById('anterior');
let dots = document.querySelectorAll('.contenedor-carrusel .puntos li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.contenedor-carrusel .puntos li.activo');
    last_active_dot.classList.remove('activo');
    dots[active].classList.add('activo');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};
