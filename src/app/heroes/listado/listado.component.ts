import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: String[] = ['Sapiderman', 'Thor', 'HardRock']
  heroeborrado: any = '';

  borrarHeroe(): void {
    this.heroeborrado = this.heroes.shift() || '';
  }

  heroeBorrado(): boolean{
    return this.heroeborrado.length !== 0;
  }

}
