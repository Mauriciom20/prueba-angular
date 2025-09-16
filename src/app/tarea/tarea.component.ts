import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarea',
  standalone: false,
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent {
  @Input() nombreTarea: string = '';          // recibe la tarea desde el padre
  @Output() completar = new EventEmitter<void>(); // emite al padre cuando se marca completada

  marcarComoCompletada() {
    this.completar.emit();
  }
}
