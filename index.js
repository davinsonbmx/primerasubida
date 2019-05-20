let curso1 = {
	id: 1,
	nombre:'bmx',
	duracion: 50,
	valor: 500
};

let curso2 = {
	id: 2,
	nombre:'baseball',
	duracion: 15,
	valor: 450
};

let curso3 = {
	id: 3,
	nombre:'skate',
	duracion: 30,
	valor: 400
};

let mostarCurso1 = () =>{
	console.log('id: ' + curso1.id);
	console.log('nombre :' + curso1.nombre);
	console.log('duracion :' + curso1.duracion);
	console.log('valor :' + curso1.valor);
}

let mostarCurso2 = () =>{
	setTimeout(function() {
		console.log('id: ' + curso2.id);
		console.log('nombre :' + curso2.nombre);
		console.log('duracion :' + curso2.duracion);
		console.log('valor :' + curso2.valor);
	},2000)
}

let mostarCurso3 = () =>{
	setTimeout(function() {
		console.log('id: ' + curso3.id);
		console.log('nombre :' + curso3.nombre);
		console.log('duracion :' + curso3.duracion);
		console.log('valor :' + curso3.valor);
	},4000)

}


mostarCurso1();
mostarCurso2();
mostarCurso3();