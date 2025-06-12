import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-btn-enlace',
  imports: [CommonModule,
    RouterLink
  ],
  standalone: true,
  templateUrl: './btn-enlace.component.html',
  styleUrl: './btn-enlace.component.css'
})
export class BtnEnlaceComponent {
  @Input() claseExtra: string = '';
  @Input() texto: string = '';
  @Input() url: string = "";
  @Input() icono: string = "";

  verificarTexto() {
    if (this.texto === '') {
      this.texto = 'Ingresar';
    }
  }
  verificarUrl() {
    if (this.url === '') {
      this.url = '';
    }
  }

  constructor() {
    this.verificarTexto();

  }



}
