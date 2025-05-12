import { Component } from '@angular/core';
import { FacebookApiService } from '../../services/facebook-api/facebook-api.service';
 
import { CommonModule } from '@angular/common';
import { ListfacebookphotosI } from '../../../models/facebook.interface';

@Component({
  selector: 'app-carousel-fb',
  imports: [CommonModule],
  templateUrl: './carousel-fb.component.html',
  styleUrl: './carousel-fb.component.css'
})
export class CarouselFbComponent {
  photos: ListfacebookphotosI[] = [];

  constructor(private facebookApiService: FacebookApiService) {}

  ngOnInit(): void {
    this.facebook();
  }

  facebook() {
    const albumId = '552712573317644';
    this.facebookApiService.getAlbumWithPhotos(albumId).subscribe({
      next: (data) => {
        this.photos = data.photos.data;
      },
      error: (error) => {
        console.error('Error loading album:', error);
      }
    });
  }
}
