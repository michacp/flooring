import {
  Component,
  AfterViewChecked,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../../shared/pipes/safe-url.pipe'; 
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips'; 
 declare var FB: any;
@Component({
  selector: 'app-facebook-media',
   imports: [CommonModule,SafeUrlPipe, MatCardModule, MatChipsModule ],
  templateUrl: './facebook-media.component.html',
  styleUrl: './facebook-media.component.css'
})
export class FacebookMediaComponent {
 videos: any[] = [
    {
      id: '1',
      embedLink: 'https://www.tiktok.com/@maumiaespe1829/video/7501497710160186630?is_from_webapp=1&sender_device=pc',
      description: 'Video 1 de ejemplo'
    },
    {
      id: '2',
      embedLink: 'https://www.tiktok.com/@segundosuarez533/photo/7501158952776895775?is_from_webapp=1&sender_device=pc',
      description: 'Video 2 de ejemplo'
    },
    {
      id: '3',
      embedLink: 'https://www.tiktok.com/@segundosuarez533/video/7501164212555746590?is_from_webapp=1&sender_device=pc',
      description: 'Video 3 de ejemplo'
    } 
  ];

  fixedText = {
    title: 'Contenido destacado',
    content: 'Aquí encontrarás los videos más populares de nuestra comunidad. Desliza para ver más contenido interesante y mantente actualizado con las últimas tendencias.'
  };
//https://discountflooring-864f8.web.app/
  constructor() { }

  ngOnInit(): void {
  }
}
