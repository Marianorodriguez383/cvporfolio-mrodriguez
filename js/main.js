// function cambiarFondo() {
//     let nombre = document.getElementById('nombre');

//     nombre.style.backgroundColor = '#009090';

// }

const $generate = document.getElementById('generate'),
        $reset = document.getElementById('reset'),
        $showColor = document.querySelector('.color-hex');

    let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

document.addEventListener('click', e =>{
    if(e.target === $generate){
        let color = "#"
        for (let i = 0; i < 6 ; i++) {color += hex[numeroRandom()]};
        $showColor.innerHTML = color;
        nombre.style.backgroundColor = color;
    }
    if (e.target === $reset ){
        $showColor.innerHTML = "#495670"
        nombre.style.backgroundColor = "#495670"
    }
})

function numeroRandom(){
    return Math.floor(Math.random()* hex.length)
}







let hideText_btn = document.getElementById('hideText_btn');
let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText() {
    hideText.classList.toggle('show');

    if (hideText.classList.contains('show')) {
        hideText_btn.innerHTML = "Menos Info"
    } else {
        hideText_btn.innerHTML = "Más Info"
    }
}