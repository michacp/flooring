import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { CarouselFbComponent } from './core/components/carousel-fb/carousel-fb.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,CarouselFbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flooring1';
}
