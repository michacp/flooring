import { Component } from '@angular/core';
 
import { TranslateModule  } from '@ngx-translate/core';
import { MatCard  } from '@angular/material/card';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-about',
  imports: [BannerComponent,TranslateModule,MatCard,MatIcon  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
