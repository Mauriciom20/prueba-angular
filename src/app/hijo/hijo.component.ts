import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: false,
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.scss'
})
export class HijoComponent {
  @Input() mensaje!: string;
  @Output() notificar = new EventEmitter<string>();

  enviarAlPadre() {
    this.notificar.emit('Hola papá, soy el hijo 👋');
  }
}
