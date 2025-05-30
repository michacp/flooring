import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-banner',
  imports: [    CommonModule,
    MatCardModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @Input() title!: string;
  @Input() breadcrumb: string[] = [];
  imageUrl= 'images/banner.jpeg';
}
