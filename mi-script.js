// EJERCICIO BOLITAS DE COLORES
var red;
var green;
var blue;


for (var i=0; i<=100; i++) {
	red = Math.floor(Math.random() * 256);
	green = Math.floor(Math.random() * 256);
	blue = Math.floor(Math.random() * 256);
	document.write("<div class='bolita' style='background-color:rgb("+red+","+green+","+blue+")'></div>");
}

