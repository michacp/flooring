import {
  Component,
  AfterViewChecked,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../../shared/pipes/safe-url.pipe';
import { FacebookApiService } from '../../services/facebook-api/facebook-api.service';
import { FacebookVideo } from '../../../models/facebook.interface';

 declare var FB: any;
@Component({
  selector: 'app-facebook-media',
   imports: [CommonModule,SafeUrlPipe],
  templateUrl: './facebook-media.component.html',
  styleUrl: './facebook-media.component.css'
})
export class FacebookMediaComponent {
  videos: FacebookVideo[] = [];
  fbParsed = false;

  get videosFiltrados(): FacebookVideo[] {
    return this.videos.filter(v => !v.error);
  }

  constructor(private facebookApiService: FacebookApiService) {}

  ngOnInit() {
    this.facebookApiService.getReels().subscribe({
      next: (data) => {
        this.videos = data.data
          .filter((video: FacebookVideo) =>
            video.permalink_url?.includes('/reel/')
          )
          .map((video: FacebookVideo) => ({ ...video, error: false }));
      }
    });
  }

  ngAfterViewChecked() {
    if (!this.fbParsed && typeof FB !== 'undefined') {
      this.fbParsed = true;

      FB.XFBML.parse(undefined, () => {
        const iframes = document.querySelectorAll('.fb-video iframe');

        iframes.forEach((iframe, index) => {
          setTimeout(() => {
            const rect = iframe.getBoundingClientRect();
            if (rect.height < 100) {
              this.videos[index].error = true;
              this.fbParsed = false; // Reparse después de ocultar
            }
          }, 1000);
        });
      });
    }
  }

  getFacebookUrl(video: FacebookVideo): string {
    return `https://www.facebook.com${video.permalink_url}`;
  }
}
