import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-contact-us',
  imports: [TranslateModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  phone = environment.contactPhone;
  email = environment.contactEmail;
  address = environment.contactAddress;
}
