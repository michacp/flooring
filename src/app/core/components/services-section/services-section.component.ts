import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-services-section',
  imports: [MatCard, MatCardContent, MatCardHeader, MatCardTitle,MatIconModule,TranslateModule,CommonModule],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.css'
})
export class ServicesSectionComponent {
services = [
  {
    icon: 'home_repair_service',
    image: 'images/piso.jpg',
    title: 'SERVICES.FLOORING.TITLE',
    description: 'SERVICES.FLOORING.DESCRIPTION'
  },
  {
    icon: 'carpenter',
    image: 'images/alfombra.jpg',
    title: 'SERVICES.CARPET.TITLE',
    description: 'SERVICES.CARPET.DESCRIPTION'
  },
  {
    icon: 'design_services',
    image: 'images/reparacion.jpg',
    title: 'SERVICES.REPAIR.TITLE',
    description: 'SERVICES.REPAIR.DESCRIPTION'
  }
];

}
