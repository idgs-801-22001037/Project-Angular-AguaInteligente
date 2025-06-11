import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts'; // Importar ScaleType
import { single } from '../../data/data';
import type { Color } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    NgxChartsModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  standalone: true
})
export class HomePageComponent {
  single = single;
  view: [number, number] = [500, 400];

  showLegend: boolean = true;
  showLabels: boolean = true;
  
  // options
  gradient: boolean = true;
  isDoughnut: boolean = false;


  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal, 
    domain: ['#5AA454', '#bb2d13']
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event: any) {
    console.log(event);
  }

  
  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
