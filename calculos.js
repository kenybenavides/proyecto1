
let estudiante ={
 nombre : 'juan',
 edad: 25,
 notas:{
 	matematicas: 3,
 	ingles: 4,
 	programacion: 5
 	 }
};

let obtenerpromedio= (nota_uno,nota_dos,nota_tres)=> (nota_uno+nota_dos+nota_tres)/3;
//console.log(obtenerpromedio(estudiante.notas.matematicas,estudiante.notas.ingles,estudiante.notas.programacion));

module.exports = {
	estudiante,
	obtenerpromedio
};