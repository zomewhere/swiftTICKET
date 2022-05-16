// DINERO --------------------------------------------------------------------

let saldo = 0;
let total = 0;


// PELICULAS ------------------------------------------------------------------

// Variables de Peliculas
let pelicula1 = document.getElementById("btnPelicula1");
let pelicula2 = document.getElementById("btnPelicula2");
let pelicula3 = document.getElementById("btnPelicula3");

// Variable de Seleccion Pelicula
let selectPelicula = "name";

// Eventos para obtener valor ALT de una pelicula y Definirlos
pelicula1.onclick = () =>{
    selectPelicula = document.getElementById("btnPelicula1").attributes.alt.nodeValue;
    total +=4500;
    sPelicula()
    sTotal()
}

pelicula2.onclick = () =>{
    selectPelicula = document.getElementById("btnPelicula2").attributes.alt.nodeValue;
    sPelicula()
    total +=4500;
    sTotal()
}

pelicula3.onclick = () =>{
    selectPelicula = document.getElementById("btnPelicula3").attributes.alt.nodeValue;
    sPelicula()
    total +=4500;
    sTotal()
}


// Funcion para escribir la Pelicula seleccionada en el HTML
function sPelicula(){
    document.getElementById("sMovie").innerText = selectPelicula
}


// HORARIO -------------------------------------------------------------------

// Variables del Horario
let horario1 = document.getElementById("btnHorario1");
let horario2 = document.getElementById("btnHorario2");
let horario3 = document.getElementById("btnHorario3");
let horario4 = document.getElementById("btnHorario4");
let horario5 = document.getElementById("btnHorario5");
let horario6 = document.getElementById("btnHorario6");

//Variable de Seleccion de Horario
let selectHorario = "hora";

// Eventos para obtener valor de texto del Horario
horario1.onclick = () =>{
    selectHorario = document.getElementById("btnHorario1").innerText
    sHorario()
}

horario2.onclick = () =>{
    selectHorario = document.getElementById("btnHorario2").innerText
    sHorario()
}

horario3.onclick = () =>{
    selectHorario = document.getElementById("btnHorario3").innerText
    sHorario()
}

horario4.onclick = () =>{
    selectHorario = document.getElementById("btnHorario4").innerText
    sHorario()
}

horario5.onclick = () =>{
    selectHorario = document.getElementById("btnHorario5").innerText
    sHorario()
}

horario6.onclick = () =>{
    selectHorario = document.getElementById("btnHorario6").innerText
    sHorario()
}

// Funcion para escribir el Horario seleccionado en el HTML
function sHorario(){
    document.getElementById("sHorario").innerText = selectHorario
}


// ASIENTOS ---------------------------------------------------------------

'use strict'
let row,col;

let array = new Array();
for(let i = 0;i<8;i++){
    array[i] = new Array();
    for(let j = 0;j<8;j++){
        array[i][j] = 0;
    }

}
//Añadir Asiento
// array[i][j] = 0 Asiento Libre
// array[i][j] = 1 Asiento Seleccionado
// array[i][j] = -1 Asiento Ocupado
// array[i][j] = 2 Cambio de Pasillo
window.onload = function createState() {
    for(let i = 1;i<=8;i++){
        for(let j = 1;j<=8;j++) {
            let one = document.createElement('div');
            document.getElementById('seat').appendChild(one);
            one.setAttribute('class', 'oneDiv');
            let sateImage = document.createElement('img');
            let num = document.createElement('span');
            num.innerText = i + '.' + j;
            sateImage.setAttribute("class", "sate");
            sateImage.setAttribute("id", "sate"+i+j);
            sateImage.setAttribute('data-toggle', 'modal');
            sateImage.setAttribute('data-target', '#myModal');
            sateImage.src = './image/seat.png';
            sateImage.addEventListener('click', function getState() {
                row = i;
                col = j;
                array[i-1][j-1] = 1;
                let where = document.getElementById('title');
                where.innerHTML = 'Seleccione el' + i + 'fila' + j + 'columna：';
                //alert(sateImage.id);
                let select = sateImage.id;
                document.getElementById(select).src = './image/select.png'
                console.log(row, col);
                sAsiento()
            });
            let change = document.getElementById('update');
            change.onclick = function changeState() {
                let imageId = "sate"+row+col;
                //alert(imageId);
                let newState = document.getElementById(imageId);
                let seatState = document.getElementById('seatState');

                let index = seatState.selectedIndex;
                let value = seatState.options[index].value;
                if(value == 'active'){
                    array[row-1][col-1] = 0;
                    newState.src = './image/seat.png';
                    console.log('active');
                    
                }
                else if(value == 'broken'){
                    array[row-1][col-1] = -1;
                    newState.src = './image/broken.png';

                    console.log('broken');

                }
                else if(value == 'aisle'){
                    array[row-1][col-1] = 2;
                    newState.src = './image/aisle.png';
                    console.log('aisle');
                }
             }
             
            one.appendChild(sateImage);
            one.appendChild(num);

        }
    }
}
function sAsiento(){
    document.getElementById("sAsiento").innerText = "Fila: " + row + "\n" + "Asiento: " + col;
}


// SNACKS ---------------------------------------------------------------

// Variables de Snacks
let snacks1 = document.getElementById("btnSnack1");
let snacks2 = document.getElementById("btnSnack2");
let snacks3 = document.getElementById("btnSnack3");

// Variable de Seleccion Snacks
let selectSnack = "name";

// Eventos para obtener valor ALT de una pelicula y Definirlos
snacks1.onclick = () =>{
    selectSnack = document.getElementById("btnSnack1").attributes.alt.nodeValue;
    total +=3500;
    sTotal()
    sSnack()
}

snacks2.onclick = () =>{
    selectSnack = document.getElementById("btnSnack2").attributes.alt.nodeValue;
    total +=2500;
    sTotal()
    sSnack()
}

snacks3.onclick = () =>{
    selectSnack = document.getElementById("btnSnack3").attributes.alt.nodeValue;
    total +=5500;
    sTotal()
    sSnack()
}


// Funcion para escribir el Snack seleccionada en el HTML
function sSnack(){
    document.getElementById("sSnack").innerText = selectSnack
}


// TOTAL

// Funcion para escribir el total en el HTML
function sTotal(){
    document.getElementById("sTotal").innerText = "$" + total
}