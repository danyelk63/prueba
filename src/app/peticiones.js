var axios = require('axios')

var url = 'http://localhost:3000/'

function enviarDatos(datos){
    axios.post(url + 'nuevo', datos).then(response => {

    }).catch(e => {

    })
}

function recibirDatos(){
    console.log("entra")
    axios.get(url).then(response => {
        return response.data;
    }).catch(e => {

    })
}