import { Component, Input } from '@angular/core';
  import { single } from './../../data/data';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card-left',
  standalone: true,

  imports: [NgxChartsModule,
    CommonModule
  ],
templateUrl: './card-left.component.html',
  styleUrl: './card-left.component.css'
})
export class CardLeftComponent {

  @Input() claseExtraTop=""
  @Input() claseExtraTopImg=""
  @Input() claseExtraCard=""
  @Input() claseExtraBody=""
  @Input() claseExtraTitlo=""
  @Input() titulo1=""
  @Input() claseExtraText=""
  @Input() texto=""

  single = single

  view2: [number, number] = [300, 400]
  showXAxis = true
  showYAxis = true
  showXAxisLabel = true
  xAxisLabel = 'Mejora'
  showYAxisLabel = true
  yAxisLabel = 'Population'
  showLegend: boolean = true
  showLabels: boolean = true
  gradient: boolean = true
  isDoughnut: boolean = false
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#bb2d13']
  }

  
  onSelect(event: any) {
    console.log(event);
  }

}
