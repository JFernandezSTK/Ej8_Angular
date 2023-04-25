import { Component } from '@angular/core';
import { curso } from '../_modelo/curso';
import { CrudCursoService } from '../crud-curso.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent {
  listado:curso[]
  id:number

  constructor(private curso:CrudCursoService){
    this.listado=this.curso.lista
    this.id=this.curso.id
  }


}
