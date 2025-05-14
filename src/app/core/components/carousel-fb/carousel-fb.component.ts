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
  constructor(private facebookApiService: FacebookApiService) {}

 ngOnInit(): void {
  this.loadCarousel();
}

loadCarousel() {
  const albumId = '552712573317644';
  this.facebookApiService.getAlbumWithPhotos(albumId).subscribe({
    next: (data) => {
      const photosfb = data.photos.data;

      this.photos = photosfb.map((photo: any, index: number) => ({
        ...photo,
        titleKey: `CAROUSEL.SLIDE_${index + 1}.TITLE`,
        descriptionKey: `CAROUSEL.SLIDE_${index + 1}.DESCRIPTION`
      }));
    },
    error: (err) => console.error('Error loading album:', err)
  });
}
}
