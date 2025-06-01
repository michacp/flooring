import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { TranslateModule  } from '@ngx-translate/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
@Component({
  selector: 'app-terms-of-service',
  imports: [BannerComponent,TranslateModule,MatCard,MatCardContent,MatCardHeader ],
  templateUrl: './terms-of-service.component.html',
  styleUrl: './terms-of-service.component.css'
})
export class TermsOfServiceComponent {

}
