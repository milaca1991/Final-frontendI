/*context = canvas.getContext("2d");  */
//dibujar una linea desde la esquina izquierda arriba al centro del canvas
/*
window.onload = function() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    context.moveTo(300, 0);
    context.lineTo(150, 75);
    context.stroke();
  }; 

  //dibujar cuadrado 1 parametro posicion a lo ancho 2 parametro posicion a lo alto 3 parametro ancho, 4 parametro alto
  window.onload = function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.rect(0, 0, 100, 200);
    context.stroke(); 
};

window.onload = function() {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");

  context.arc(150, 100, 50, 0, 2* Math.PI);
  context.stroke();  

  context.fillStyle="blue";
    context.fill();   
};*/

window.onload = function() {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");

 context.beginPath();
  context.rect(50, 50, 50, 50);
  context.lineWidth = 3;
  context.strokeStyle ="gray ";
  context.fillStyle = "#000000";
  context.fill()
  context.stroke();

/*para poner varios elementos*/
  context.beginPath(); 
  context.arc(150, 75, 25, 0, 2* Math.PI);
  context.stroke();  
  context.fillStyle="blue";
  context.fill();   

  context.font = "100% Arial";
  context.fillText("My first game", 100, 20); 
 

};