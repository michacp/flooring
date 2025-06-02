import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, MatButtonModule, TranslateModule,MatFormFieldModule,MatSelectModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  scrolled = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  selectedLang = 'es';

  changeLang(lang: string): void {
    this.selectedLang = lang;
    this.translate.use(lang);
  }
  aboutus() {
    // lógica personalizada si la necesitas
  }

  navLinks = [
    { label: 'NAVBAR.HOME', path: '/home', exact: true },
    { label: 'NAVBAR.ABOUT', path: '/about-us', exact: false },
    { label: 'NAVBAR.SERVICES', path: '/services', exact: false },
    { label: 'NAVBAR.CONTACT', path: '/contact', exact: false }
  ];
}
