import { Injectable } from '@angular/core';
import { curso } from './_modelo/curso';

@Injectable({
  providedIn: 'root'
})
export class CrudCursoService {
  lista:curso[]
  id:number
  nombre:string
  duracion:number
  nivel:string

  constructor() {
    this.lista=[]
    this.id=0
    this.nombre=""
    this.duracion=0
    this.nivel="Principiante"
   }

   anadir(c:curso){
    this.lista.push(c)
  }

  modificarFactura(id:number,nombre:string,duracion:number){
    let c =this.lista.find(c => c.id == id)
    if(c != undefined) {
      let index = this.lista.indexOf(c)
      c.nombre=nombre
      c.duracion = duracion
      this.lista[index] = c
    }

  }
}
