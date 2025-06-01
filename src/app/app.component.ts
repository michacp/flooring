import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { FacebookApiService } from './core/services/facebook-api/facebook-api.service'; 
import { FooterComponent } from './core/components/footer/footer.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FooterComponent,NavbarComponent],
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
