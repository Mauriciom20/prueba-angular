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

  tareaTyping: string = '';     // texto que escribe el usuario
  tareaEnviada: string = '';    // tarea enviada al hijo
  tareaCompletada: boolean = false;

  mostrarTexto() {
    alert(this.textoInput);
  }

  cambiarTexto() {
    this.textoInput = 'Texto cambiado desde el padre!';
  }

  recibirNotificacion(mensaje: string) {
    alert('Mensaje recibido del hijo: ' + mensaje);
  }

  enviarTarea() {
    this.tareaEnviada = this.tareaTyping.trim();
    this.tareaCompletada = false; // reset cuando envías nueva tarea
  }

  completarTarea() {
    this.tareaCompletada = true;
  }
}
