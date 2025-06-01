import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { TranslateModule  } from '@ngx-translate/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
@Component({
  selector: 'app-data-deletion-instructions',
  imports: [BannerComponent,TranslateModule,MatCard,MatCardContent,MatCardHeader ],
  templateUrl: './data-deletion-instructions.component.html',
  styleUrl: './data-deletion-instructions.component.css'
})
export class DataDeletionInstructionsComponent {

}
