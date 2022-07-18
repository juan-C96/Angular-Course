import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
        <h1> {{ title }} </h1>

        <button (click)=" numero = numero + 1 ">+1</button>

        <span> {{ numero }} </span>

        <button (click)=" numero === 0 ? numero = numero : numero = numero - 1 ">-1</button>

        <hr/>
        <hr/>

        <h1> Con base: 5 </h1>

        <button (click)="sumar( base )"> + {{base}} </button>

        <span> {{ numero2 }} </span>

        <button (click)="restar( base )"> - {{base}} </button>

        <hr/>
        
        `,  
  styleUrls: ['./counter.component.css']
})

export class CounterComponent {
  title = 'Contador App';
  numero: number = 10;
  numero2: number = 10;
  base: number = 5;
  
  sumar(base: number){
    this.numero2 += base;
  }

  restar(base: number){
    this.numero2 -= base;
  }

}