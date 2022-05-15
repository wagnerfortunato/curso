import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  
  cursos: string[];

  cursosService: CursosService

  constructor(private CursosService: CursosService) { 
  this.nomePortal = 'http://loiane.training';

  /*for (let i=0; i<this.cursos.length; i++){
    let curso = this.cursos[i];
     }*/

     //var servico = new CursosService ();
      this.cursosService = cursosService.getCursos();
     }
     
     ngOnInit() {
       
     }

}
