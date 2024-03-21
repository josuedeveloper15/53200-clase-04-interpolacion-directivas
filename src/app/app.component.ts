import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'clase-04-no-standalone';

  hasError = true;

  isDisabled = false;

  students = ['Naruto', 'Kakashi', 'Sakura', 'Sasuke'];

  example = [{ nombre: 'Naruto', aprobado: true }];

  frutas: string[] = [];
  frutas2: Array<string> = [];

  mostrarListado = false;

  status: 'en-camino' | 'entregado' | 'en-preparacion' = 'en-preparacion';

  myBirthday = new Date(1994, 8, 24);

  alternarError() {
    this.hasError = !this.hasError;
  }

  onSelectChange(ev: Event) {
    const elemento = ev.target as HTMLSelectElement;
    const valor = elemento.value as
      | 'en-camino'
      | 'entregado'
      | 'en-preparacion';
    this.status = valor;
  }
}
