import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-footer',
  imports: [TranslateModule,RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  facebookUrl = environment.facebook_url;
  instagramUrl = environment.instagramUrl;
  tiktokUrl = environment.tiktokUrl;
  currentYear = new Date().getFullYear();

  
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement.querySelector('.footer-section'), 'in-view');
          observer.disconnect(); // Se detiene tras activarse
        }
      },
      { threshold: 0.2 } // Se activa cuando el 20% del footer es visible
    );

    observer.observe(this.el.nativeElement.querySelector('.footer-section'));
  }
}
