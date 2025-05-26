import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { CarouselFbComponent } from './core/components/carousel-fb/carousel-fb.component'; 
import { TiktokCarrucelComponent } from './core/components/tiktok-carrucel/tiktok-carrucel.component';
import { ServicesSectionComponent } from './core/components/services-section/services-section.component';
import { ExperienceSectionComponent } from './core/components/experience-section/experience-section.component';
import { FacebookApiService } from './core/services/facebook-api/facebook-api.service';
import { FacebookGalleryComponent } from './core/components/facebook-gallery/facebook-gallery.component';
import { ContactUsComponent } from './core/components/contact-us/contact-us.component';
import { FooterComponent } from './core/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CarouselFbComponent,TiktokCarrucelComponent,ServicesSectionComponent,
    ExperienceSectionComponent,FacebookGalleryComponent,ContactUsComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private fbService: FacebookApiService){}
  title = 'Discount Flooring';
    ngOnInit(): void {
    this.fbService.fetchAlbum().subscribe();
  }
}
