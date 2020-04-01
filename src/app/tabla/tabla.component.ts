import { Component, OnInit, NgModule } from '@angular/core';
//var peticiones = require('../peticiones.ts')
import * as peticiones from '../peticiones.js';
import axios from 'axios'
var url = 'http://localhost:3000/'

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  documento: String;
  nombre1: String;
  nombre2: String;
  apellido1: String;
  apellido2: String;
  fechaIni: String;
  fechaFin: String;
  horaTurnoIni: String;
  horaTurnoFin: String;
  horaIniExtra: String;
  horaFinExtra: String;
  motivo: String;

  arreglo: []
  arreglo2: []

  registros: [];
  registros2: [];

  constructor() { }

  ngOnInit(): void {
    this.recibirDatos();
  }

  enviarDatos(){
    var datos ={
      documento: this.documento,
      nombre1: this.nombre1,
      nombre2: this.nombre2,
      apellido1: this.apellido1,
      apellido2: this.apellido2,
      fechaIni: this.fechaIni,
      fechaFin: this.fechaFin,
      horaTurnoIni: this.horaTurnoIni,
      horaTurnoFin: this.horaTurnoFin,
      horaIniExtra: this.horaIniExtra,
      horaFinExtra: this.horaFinExtra,
      motivo: this.motivo,
    }
    
    axios.post(url + 'nuevo', datos).then(response => {
    }).catch(e => {

    })

    this.recibirDatos();
  }

  async recibirDatos(){
    axios.get(url).then(response => {
      this.arreglo = response.data
    }).catch(e => {
    })

    axios.get("https://jsonplaceholder.typicode.com/todos").then(Response => {
      this.arreglo2 = Response.data;
    })
  }

}
