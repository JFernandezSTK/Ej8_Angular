import { Component, EventEmitter, Output } from '@angular/core';
import { curso } from 'src/app/_modelo/curso';
import { CrudCursoService } from 'src/app/crud-curso.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-cursos',
  templateUrl: './form-cursos.component.html',
  styleUrls: ['./form-cursos.component.css']
})
export class FormCursosComponent {
  id:number
  nombre:string
  duracion:number
  nivel:string

  constructor(private curso:CrudCursoService, private ruta:ActivatedRoute){
    this.id=ruta.snapshot.params['id']
    this.nombre=curso.nombre
    this.duracion=curso.duracion
    this.nivel="Principiante"
  }

  ngOnInit(){
    this.ruta.params.subscribe(id => this.id=id["id"])
  }

  anadir(){
    this.curso.anadir(new curso(this.id,this.nombre,this.duracion,this.nivel))
  }

  mostrar(){
    return this.curso.lista
  }

  modificar(){
    this.curso.modificarFactura(this.id,this.nombre,this.duracion)
  }

  cambio(){
    if(this.ruta.snapshot.params["id"] == undefined){
      this.anadir()
    }else{
      this.modificar()
    }
  }

}