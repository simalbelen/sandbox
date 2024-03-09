var turnoGato = true
var casillasMarcadas=[]
var hayGanador = false
localStorage.setItem('tablero', JSON.stringify( ['','','','','','','','','']))
generate()

function generate(){
    var tablero = document.getElementById('tablero')
    for (let i=0 ; i<9 ; i++){
        var casilla = document.createElement('div')
        casilla.setAttribute('class', 'celda')
        casilla.setAttribute('id', i)
        casilla.setAttribute('onclick','jugada(id)')
        tablero.appendChild(casilla)
    }
}


function jugada(id_casilla){
    if (!casillasMarcadas.includes(id_casilla) && !hayGanador){
        casillasMarcadas.push(id_casilla)
        let imagen = document.createElement('img')
        console.log(turnoGato)
        if (turnoGato){
            imagen.setAttribute('src', 'https://i.pinimg.com/736x/25/40/de/2540de1db897bbbc4972d348447f0bb8.jpg')
        } else {
            imagen.setAttribute('src', 'https://t2.ea.ltmcdn.com/es/posts/8/9/2/nombres_graciosos_para_perros_pequenos_23298_3_600.jpg')
        }
        imagen.setAttribute('width', '150px')
        imagen.setAttribute('height', '150px')
        document.getElementById(id_casilla).appendChild(imagen)
        var tablero = JSON.parse(localStorage.getItem('tablero'))
        tablero[id_casilla] = turnoGato
        console.log(tablero)
        localStorage.setItem('tablero', JSON.stringify(tablero))
        turnoGato = !turnoGato 
        buscaGanador()
    }
}

function buscaGanador(){
    var tablero = JSON.parse(localStorage.getItem('tablero'))
    var ganador = ''
    /* x x x
       - - -
       - - - */
    if ((tablero[0] === tablero[1] && tablero[1] === tablero[2]) && (tablero[0] !== '')){ 
        ganador=tablero[0]
        hayGanador=true;
    }
    /* - - -
       x x x
       - - - */
    if (tablero[3] === tablero[4] && tablero[4] === tablero[5] && (tablero[3] !== '')){
        ganador=tablero[3]
        hayGanador=true;
    } 
    /* - - -
       - - -
       x x x */
    if ((tablero[6] === tablero[7] && tablero[7] === tablero[8]) && (tablero[6] !== '')){
        ganador=tablero[6]
        hayGanador=true;
    } 

    /* x - -
       x - -
       x - - */
    if ((tablero[0] === tablero[3] && tablero[3] === tablero[6]) && (tablero[0] !== '')){ 
        ganador=tablero[0]
        hayGanador=true;
    }
    /* - x -
       - x -
       - x - */
    if (tablero[1] === tablero[4] && tablero[4] === tablero[7] && (tablero[1] !== '')){
        ganador=tablero[1]
        hayGanador=true;
    } 
    /* - - x
       - - x
       - - x */
    if ((tablero[2] === tablero[5] && tablero[5] === tablero[8]) && (tablero[2] !== '')){
        ganador=tablero[2]
        hayGanador=true;
    } 

    /* x - -
       - x -
       - - x */
    if ((tablero[0] === tablero[4] && tablero[4] === tablero[8]) && (tablero[0] !== '')){ 
        ganador=tablero[0]
        hayGanador=true;
    }
    /* - - x
       - x -
       x - - */
    if (tablero[2] === tablero[4] && tablero[4] === tablero[6] && (tablero[2] !== '')){
        ganador=tablero[2]
        hayGanador=true;
    } 

   
    if(hayGanador){
        if (ganador === true){ //Kitty
            document.getElementById('vicKitty').innerHTML = parseInt(document.getElementById('vicKitty').innerHTML) + 1
            alert("La victoria es para Kitty")
        } else { //Puppy
            document.getElementById('vicPuppy').innerHTML = parseInt(document.getElementById('vicPuppy').innerHTML) + 1
            alert("La victoria es para Puppy")
        }
    } else if (casillasMarcadas.length === 9){
        alert("Se ha producido un empate")
    }
  
}

function restart(){
    turnoGato=true
    hayGanador=false
    casillasMarcadas=[];
    localStorage.setItem('tablero', JSON.stringify( ['','','','','','','','','']))
    document.getElementById('tablero').innerHTML=''
    generate()
}

function reset(){
    document.getElementById('vicPuppy').innerHTML = 0
    document.getElementById('vicKitty').innerHTML = 0
    restart()
}

// <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/10E9B/production/_109757296_gettyimages-1128004359.jpg" width="150px" height="100px"/> 