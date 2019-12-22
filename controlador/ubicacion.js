//se crea una constante axios que requerira de la libreria axios 
const axios = require('axios');
//se crea una funcion flecha de tipo asynnc que requiere como parametro el nombre de la ciudad
const getCIudadLatLon = async (nombre) =>{
    //se crea una constante instance que guardara la peticion a la api 
    const instance = axios.create({
        //se envia la url con el nombre de la ciudad como parametro
        baseURL:`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${nombre}`,
        //se envia los headers con el X-RapidAPI-Key de cada usuario
        headers:{'X-RapidAPI-Key' : 'b30ec602c4msh6558caa0a65c93dp11ad49jsn073a3495cdfc'}
    });
    // se crea una constante resp que sera de tipo await y llama a una peticion get intnace.get
    const resp = await instance.get();
    
    //si la resp.data.Results.length es igual a 0 entonces se sabe que no trajo nada
    if(resp.data.Results.length === 0){
        //entonces se lanza un nuevo error que sera "No existe resultados para y el  nombre de la ciudad"
        throw new Error(`No existe resultados para ${nombre}`)
    }

    //se crea una constante data que guardara el resp.data.Result[0] que sera la primera respuesta del json que devuelva la api
    const data=resp.data.Results[0];
    //se crea una constante nombre que guardara el nombre de la ciudad 
    const name = data.name;
    //se crea una constante lat que guardara la latitud de la  ciudad
    const lat = data.lat;
    //se crea una constante longitud que guardara la ongitud de la ciudad
    const lon = data.lon;
    //se retorna un vector de objetos que tendra el nombre, la latitud y longitud de la ciudad
    return {name,lat,lon};
    // intance.get()
    // .then(resp => {
    //     console.log(resp.data.Results[0]);
    // }).catch(err => {
    //     console.log('ERROR: ',err)
    // });
}

//se exportan los metodos
module.exports = {
    //se exporta el metodo getCIudadLatLon
    getCIudadLatLon
};
