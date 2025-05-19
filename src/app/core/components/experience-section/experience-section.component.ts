import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-experience-section',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    TranslateModule
  ],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.css'
})
export class ExperienceSectionComponent {
experienceCards = [
  {
    image: 'images/exp1.jpg',
    title: 'EXPERIENCE.CARD1.TITLE',
    description: 'EXPERIENCE.CARD1.DESCRIPTION'
  },
  {
    image: 'images/exp2.jpg',
    title: 'EXPERIENCE.CARD2.TITLE',
    description: 'EXPERIENCE.CARD2.DESCRIPTION'
  },
  {
    image: 'images/exp3.jpg',
    title: 'EXPERIENCE.CARD3.TITLE',
    description: 'EXPERIENCE.CARD3.DESCRIPTION'
  }
];
}
