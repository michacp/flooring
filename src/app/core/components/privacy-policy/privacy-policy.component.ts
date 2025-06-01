import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { TranslateModule  } from '@ngx-translate/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
@Component({
  selector: 'app-privacy-policy',
  imports: [BannerComponent,TranslateModule,MatCard,MatCardContent,MatCardHeader ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {

}
