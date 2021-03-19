import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto';
  numeroUno :any;
  numeroDos :any;
  promedio :any;
  suma :any;

limpiar(){
  this.numeroUno = 0;
  this.numeroDos = 0;
}
calcular(){
  console.log("numero1 "+ this.numeroUno);
  console.log("numero2 "+ this.numeroDos);
  this.promedio = ( parseInt(this.numeroUno) + parseInt(this.numeroDos)) / 2 ;
  this.suma = parseInt(this.numeroUno) + parseInt(this.numeroDos);
}
}

