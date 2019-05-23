const fs= require('fs');
const c = require('./materias');
let materia = c.materias;

const matricula = {
	cedula:{
		demand:true,
		alias:'c'
	},
	nombre:{
		demand:true,
		alias:'nom'
	},
	id:{ 
		demand:true,
		alias:'i'
	}
}

let mostarMaterias = () =>{
		console.log('id: ' + materia[0].id);
		console.log('nombre :' + materia[0].nombre);
		console.log('duracion :' + materia[0].duracion);
		console.log('valor :' + materia[0].valor + '\n');

	setTimeout(function() { 
		console.log('id: ' + materia[1].id);
		console.log('nombre :' + materia[1].nombre);
		console.log('duracion :' + materia[1].duracion);
		console.log('valor :' + materia[1].valor + '\n');
	},2000)

	setTimeout(function() { 
		console.log('id: ' + materia[2].id);
		console.log('nombre :' + materia[2].nombre);
		console.log('duracion :' + materia[2].duracion);
		console.log('valor :' + materia[2].valor + '\n');
	},4000)
}

const argv = require ('yargs')
	.command('matricula','matricula estudiante',matricula)
	.argv



let crearArchivo = (matricula)=>{

	let busquedaMateria = materia.find(function(materia) {
	return materia.id == argv.id});

	if (busquedaMateria != null) {
	text = 
	    'EL estudiante : '+ argv.nombre + ' con la cedula' 
	     + argv.cedula + ' ha sido mariculado en la materia '+  busquedaMateria.nombre +' con el codigo : ' + argv.id  +'\n'  


fs.writeFile('informacion.txt' , text , (err) =>{
		if(err) throw (err);
		console.log('se ha creado el archivo')
	});
	}else{
		console.log('el id de la materia no coincide con ninguna materia ofertada')
	}
}

let ejecutar =() => {
	setTimeout(function(){mostarMaterias()}, 100);
	if (argv.id != null){
		crearArchivo(matricula);
	}
}


ejecutar();
