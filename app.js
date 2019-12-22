//se crea una constante con una destructuracion del metodo getCIudadLatLon  que se encuentra en ubbicacion
const {getCIudadLatLon} = require('./controlador/ubicacion');
//se crea una constante que tendra como requerimiento los metodos de la clase clima
const clima = require('./controlador/clima');

//se crea una constante argv que requiere de la libria yargs y se crean las opciones de esta libreria 
const argv = require('yargs').options({
    nombre : {
        alias: 'n',
        desc: 'Nombre de la ciudad para obtener clima',
        demand : true
    }
}).argv;

//se crea una funcion fecha de tipo async llamada getInfo que recive el nombre de la ciudad
const getInfo= async(ciudad) =>{
    //se encuentra dentro de un try y un catch para el manejo de errores
    try{
        //se crea una constante vec que guardara la respuesta del metodo getCIudadLatLon que devuelve la longitud y latitud de la ciudad cuyo nombre se envia
        const vec=await getCIudadLatLon(ciudad);
        //se crea una constante vec2 que guardara lo que retorne el metodo getClima que devuelve la temperatura
        const vec2=await clima.getClima(vec);
        //retorna vec2 con la temperatura de la ciudad
        return vec2;
    }catch(error){
        //retorna Error
        return 'Error'
    }
    
}


// clima.getClima(-0.19,-78.5)
// .then(console.log);

getInfo(argv.nombre)
.then(console.log);
