// DINERO --------------------------------------------------------------------

let saldo 
let total = 0;

// ININICIAR

let userName = "";

let start = document.getElementById("start")
start.onclick = () => {
    swal.fire({
         title: "¬°Bienvenido!",
         text: "Para comenzar, ingresa tu nombre y obten un Bono de $10.000",
         input: "text",
            inputValidator: function (value) {
            userName = value;
            saldo = 10000;
            sUser()
            }
    })
}


function sUser() {
    document.getElementById("sUser").innerText = "Hola " + userName + ", tu saldo es de: $" + saldo
    guardar_localstorage()
}

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
    total +=4500;
    sPelicula()
    sTotal()
}

pelicula3.onclick = () =>{
    selectPelicula = document.getElementById("btnPelicula3").attributes.alt.nodeValue;
    total +=4500;
    sPelicula()
    sTotal()
}


// Funcion para escribir la Pelicula seleccionada en el HTML
function sPelicula(){
    document.getElementById("sMovie").innerText = selectPelicula
    document.getElementById("btnPelicula1").disabled = true;
    document.getElementById("btnPelicula2").disabled = true;
    document.getElementById("btnPelicula3").disabled = true;
    location="#mHorario"
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
    document.getElementById("btnHorario1").disabled = true;
    document.getElementById("btnHorario2").disabled = true;
    document.getElementById("btnHorario3").disabled = true;
    document.getElementById("btnHorario4").disabled = true;
    document.getElementById("btnHorario5").disabled = true;
    document.getElementById("btnHorario6").disabled = true;
    location="#mAsiento"
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
window.onload = function createState() {
    for(let i = 1;i<=5;i++){
        for(let j = 1;j<=10;j++) {
            let one = document.createElement('div');
            document.getElementById('seat').appendChild(one);
            one.setAttribute('class', 'oneDiv');
            let sateImage = document.createElement('img');
            let num = document.createElement('span');
            num.innerText = i + ' - ' + j;
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
                where.innerHTML = 'Seleccione el' + i + 'fila' + j + 'columnaÔľö';
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
    location="#mSnack"
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
    location="#mResume"
}

snacks2.onclick = () =>{
    selectSnack = document.getElementById("btnSnack2").attributes.alt.nodeValue;
    total +=2500;
    sTotal()
    sSnack()
    location="#mResume"
}

snacks3.onclick = () =>{
    selectSnack = document.getElementById("btnSnack3").attributes.alt.nodeValue;
    total +=5000;
    sTotal()
    sSnack()
    location="#mResume"
}


// Funcion para escribir el Snack seleccionada en el HTML
function sSnack(){
    document.getElementById("sSnack").innerText = selectSnack
    document.getElementById("btnSnack1").disabled = true;
    document.getElementById("btnSnack2").disabled = true;
    document.getElementById("btnSnack3").disabled = true;
}

// localStorage --------------------------------------------------------------
obtener_localstorage()

function obtener_localstorage(){
    if(localStorage.getItem("user")){
        userName = localStorage.getItem("user")
        saldo = localStorage.getItem("dinero")
        sUser()
    } else{
        console.log("nada por aqu√≠");
    }
    
}

function guardar_localstorage(){
    localStorage.setItem("user", userName)
    localStorage.setItem("dinero", saldo)
}

// RESUMEN ------------------------------------------------------------------

// FINALIZAR ----------------------------------------------------------------
let finalizar = document.getElementById("finalizar")

finalizar.onclick = () =>{
    if(total<saldo){
        Swal.fire({
            title: 'Gracias!',
            text: 'Muestra este codigo en Boleteria para acceder a tus productos',
            imageUrl: './assets/qr-code.png',
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'QR Pedido',
        })
        saldo -= total;
        sUser();
    } else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No tienes dinero para comprar, haz click en OK para recibir un bono',
          }).then((result) =>{
            if (result.isConfirmed) {
                start.onclick()
              }
          })
    }
}

// REINICIAR ----------------------------------------------------------------
let reload = document.getElementById("reload")

reload.onclick = () =>{
    localStorage.clear();
    location="#mPelicula";
    setTimeout(function(){
        location.reload()
    }, 1000);
}

// TMDB API -----------------------------------------------------------------

const cargarPeliculas = async() =>{
    try{
        const respuesta = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=c92b4da206b87df1b2ffdec716c93ec9")
        if(respuesta.status === 200){
            const datos = await respuesta.json();
            let peliculas = "";
            datos.results.forEach(pelicula => {
                peliculas += `
                    <div class="peliculaCard">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                        <p class="peliculasTitle">${pelicula.title}</p>
                        <p>‚≠ź ${pelicula.vote_average}</p>
                        </div>
                `;
            });
            document.getElementById("peliculasApi").innerHTML = peliculas;
        } else if(respuesta.status === 401){
            console.log("Hay un error de Key");
        } else if(respuesta.status === 404){
            console.log("La pelicula no existe");
        } else {
            console.log("Error");
        }
    } catch{
        console.log(error);
    }
}

cargarPeliculas()

// TOTAL

// Funcion para escribir el total en el HTML
function sTotal(){
    document.getElementById("sTotal").innerText = "$" + total
}