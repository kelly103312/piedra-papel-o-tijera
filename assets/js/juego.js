var user_point=0;
var pc_point=0;
var elemento_user= document.querySelector('#user-point');
var elemento_pc= document.querySelector('#pc-point');
var eleccion_user= document.querySelector('#eleccion_user');
var eleccion_pc= document.querySelector('#eleccion_pc');

var papel=document.querySelector('#papel');
var tijeras=document.querySelector('#tijeras');
var piedra=document.querySelector('#piedra');

var restaurar=document.querySelector('#restaurar');

function pcEleccion(){
    const choices = ['piedra', 'papel', 'tijeras'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function lose(){
    alert('Perdio');
    pc_pointt();
}
function empate(){
    alert('Empate');
}
function win(){
    alert('Ganaste');
    user_pointt();
}

function user_pointt(){
    user_point++;
    elemento_user.innerHTML=user_point;
    elemento_pc.innerHTML=pc_point;
}

function pc_pointt(){
    pc_point++;
    elemento_user.innerHTML=user_point;
    elemento_pc.innerHTML=pc_point;
}

function juego(eleccion){
    eleccion_user.innerHTML = eleccion;
    var pc_eleccion=pcEleccion();
    eleccion_pc.innerHTML = pc_eleccion;

   switch(pc_eleccion + eleccion){
      case 'piedrapiedra':
      case 'papelpapel':
      case 'tijerastijeras':
          empate();
        break;
      case 'piedrapapel':
      case 'papeltijeras':
      case 'tijeraspiedra': 
         win();
        break;
      case 'piedratijeras':
      case 'papelpiedra':
      case 'tijeraspapel':
          lose();
          break;
   }
}

function reiniciar_juego(){
    var res = confirm("Está seguro de reiniar el juego?");
    if(res){
        user_point=0;
        pc_point=0;
        elemento_user.innerHTML = user_point;
        elemento_pc.innerHTML = pc_point;
        eleccion_pc.innerHTML = "-";
        eleccion_user.innerHTML = "-";

        alert("Se ha reiniciado el juego");
    }else{
        alert("Continue jugando, se ha reestablecido el juego");
    }
}

function main() {
    piedra.addEventListener('click', function() {
       juego('piedra');
    });
    
    papel.addEventListener('click', function() {
        juego('papel');
    });
    
    tijeras.addEventListener('click', function() {
        juego('tijeras');
      
    });
    restaurar.addEventListener('click',function(){
       reiniciar_juego();
    });
}

main ();