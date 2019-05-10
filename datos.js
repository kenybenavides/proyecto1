const {estudiante,obtenerpromedio} = require('./calculos');
const fs = require('fs');

console.log('el nombre del estudiante es '+ estudiante.nombre);
console.log('El promedio del estudiante es '+obtenerpromedio(estudiante.notas.matematicas,estudiante.notas.ingles,estudiante.notas.programacion));

let {nombre, edad: anos, notas:{matematicas,ingles,programacion}}=estudiante;

console.log('el nombre del estudiante es '+nombre);
console.log('El promedio del estudiante es '+obtenerpromedio(matematicas,ingles,programacion));
console.log('la edad del estudiantew es'+anos);

let crearArchivo = (estudiante) =>{

	texto = 'el nombre del estudiante es ' +nombre+ '\n'+
			'ha obtenideo un promedio de '+obtenerpromedio(matematicas,ingles,programacion);
			fs.writeFile('promedio.txt',texto,(err)=>{
					if(err)throw(err);
					console.log('se ha creado el archivo');
			});

 } 


 crearArchivo(estudiante);