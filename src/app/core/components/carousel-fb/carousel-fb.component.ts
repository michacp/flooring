import { Component } from '@angular/core';
import { FacebookApiService } from '../../services/facebook-api/facebook-api.service';
 
import { CommonModule } from '@angular/common';
import { ListfacebookphotosI } from '../../../models/facebook.interface';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-carousel-fb',
  imports: [CommonModule,TranslateModule ],
  templateUrl: './carousel-fb.component.html',
  styleUrl: './carousel-fb.component.css'
})
export class CarouselFbComponent {
 
  photos: ListfacebookphotosI[] = []; 
  constructor(private fbService: FacebookApiService) {}

 ngOnInit(): void {
 
      this.fbService.album$.subscribe(data => {
      if (data) {
        console.log(data)
         this.loadCarousel(data.feed.data);
        
        // Aquí ya puedes usar los datos
      }
    });
 
}

loadCarousel(data:any) { ; 
    const photosfb = data;
    let images: any[] = [];
    
    // Recorrer los posts hasta obtener 4 imágenes
    for (const post of photosfb) {
      if (images.length >= 4) break;
      
      if (post.attachments?.data[0]?.media?.image) {
        // Si es una sola imagen
        images.push({
          src: post.attachments.data[0].media.image.src,
          width: post.attachments.data[0].media.image.width,
          height: post.attachments.data[0].media.image.height
        });
      }
      
      if (post.attachments?.data[0]?.subattachments?.data) {
        // Si hay múltiples imágenes en el post (subattachments)
        for (const sub of post.attachments.data[0].subattachments.data) {
          if (images.length >= 4) break;
          if (sub.media?.image) {
            images.push({
              src: sub.media.image.src,
              width: sub.media.image.width,
              height: sub.media.image.height
            });
          }
        }
      }
    }

    this.photos = images.slice(0, 4).map((img, index) => ({
      ...img,
      titleKey: `CAROUSEL.SLIDE_${index + 1}.TITLE`,
      descriptionKey: `CAROUSEL.SLIDE_${index + 1}.DESCRIPTION`
    }));  
}
}
