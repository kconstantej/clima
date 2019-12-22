//se crea una constante que tiene como  requerimiento la libreria axios
const axios = require('axios');

//se cera una funcion flecha de tipo async que recive como parametro un vector que contendra la latitud, longitud y nombre del pais a buscar
const getClima = async(vec) => {
    //se crea una constante resp que sera una variable de tipo await que contendra la peticion que se ara a la api api.openweathermap.org con el json que contiene la infromacion
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${vec.lat}&lon=${vec.lon}&appid=58a2e1bcf018f5460690f89caa650b9b&units=metric`);
    // se retorna la resp.data.main.temp que sera la temperatura del pais cuyas cordenadas se recivio de entrada del metodo
    return resp.data.main.temp;
}


//se exporta los modulos indicados 
module.exports = {
    //se exporta el metodo getclima
    getClima
}