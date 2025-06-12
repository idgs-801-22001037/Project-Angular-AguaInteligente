import { Component, Input } from '@angular/core';
import { single } from '../../data/data';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-card-top',
  imports: [NgxChartsModule],
templateUrl: './card-top.component.html',
  styleUrl: './card-top.component.css'
})
export class CardTopComponent {
  @Input() claseExtraCardHeader: string = ''
  @Input() claseExtraCardBody: string = ''
  @Input() titulo1: string = ''
  @Input() claseTitulo1: string = ''
  @Input() titulo2: string = ''
  @Input() claseTitulo2: string = ''
  @Input() textoCard: string = ''


  
}
