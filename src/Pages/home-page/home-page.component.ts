  import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts'; // Importar ScaleType
import { single } from '../../data/data';
import type { Color } from '@swimlane/ngx-charts';
import { RouterLink } from '@angular/router';
import * as AOS from 'aos';
import { HeaderComponent } from '../../Layouts/header/header.component';
import { BtnEnlaceComponent } from '../../Components/btn-enlace/btn-enlace.component';
import { CardTopComponent } from '../../Components/card-top/card-top.component';
import { CardLeftComponent } from '../../Components/card-left/card-left.component';
import { CarruselComponent } from '../../Components/carrusel/carrusel.component';

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    NgxChartsModule,
    RouterLink,
    HeaderComponent,
    BtnEnlaceComponent,
    CardTopComponent,
    CardLeftComponent,
    CarruselComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  standalone: true
})
export class HomePageComponent {
  single = single;
  view: [number, number] = [500, 400];
  view2: [number, number] = [300, 400];
  showXAxis = true;
  showYAxis = true;
   showXAxisLabel = true;
  xAxisLabel = 'Mejora';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

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


  
  carrusel = [
    {
      src: '/img/vacas.png',
      alt: 'Oportunidades de empleo',
      title: 'First slide label',
      description: 'Some representative placeholder content for the first slide.',
    },
    {
      src: '/img/universidad.webp',
      alt: 'Empleo 2',
      title: 'First slide label',
      description: 'Some representative placeholder content for the first slide.',
    }
  ]


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

  ngOnInit(){
    if(typeof window !== 'undefined'){
      AOS.init();
      AOS.refreshHard();
    }
  }
}
