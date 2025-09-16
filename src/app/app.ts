import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  textoInput = '';
  mensajePadre = 'Soy el padre y mando este mensaje 👨‍👦';

  mostrarTexto() {
    alert(this.textoInput);
  }

  cambiarTexto() {
    this.textoInput = 'Texto cambiado desde el padre!';
  }

  recibirNotificacion(mensaje: string) {
    alert('Mensaje recibido del hijo: ' + mensaje);
  }
}
