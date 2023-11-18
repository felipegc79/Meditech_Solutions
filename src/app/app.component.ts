import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto-prueba';
  isFormVisible = false; // Variable de estado para controlar la visibilidad del formulario

  toggleForm() {
    // Lógica para cambiar el estado de la visibilidad del formulario
    this.isFormVisible = !this.isFormVisible;
    console.log('toggleForm method called, Form visibility:', this.isFormVisible);
  }
}
