import { Component, NgZone } from '@angular/core';
import { ListtiktokvideosI } from '../../../models/ticktock.interface';
import { TiktokVideoComponent } from '../tiktok-video/tiktok-video.component';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-tiktok-carrucel',
  imports: [TiktokVideoComponent,CommonModule,MatCard,MatCardTitle,MatCardHeader,MatCardContent,TranslateModule],
  templateUrl: './tiktok-carrucel.component.html',
  styleUrl: './tiktok-carrucel.component.css'
})
export class TiktokCarrucelComponent { 
videoIds:ListtiktokvideosI[]=[]
  currentVideoId: string = '';
  currentIndex: number = 0;
  interval: any;
  playCount: number = 0; // Contador de vueltas al array
  maxPlays: number = 3;  // Número máximo de vueltas permitidas

  constructor(private ngZone: NgZone ) { }

  ngOnInit() {
    this.dataget()

    
  }
  async dataget() {
  //  const data =await this.api.gevideos()
    this.videoIds= [
    { video_id: '7504883634189520174', duration: 12 },
    { video_id: '7504882810793119022', duration: 13 },
    { video_id: '7504879149329272106', duration: 16 },
    { video_id: '7501164212555746590',duration: 11 },
    { video_id: '7501153496046259502', duration: 15 },
    { video_id: '7501155777776766254',duration: 19 }
  ];
    this.playNextVideo();
  }
  ngOnDestroy() {
    if (this.interval) {
      clearTimeout(this.interval);
    }
  }

  playNextVideo() {
    // Detener la reproducción después de alcanzar el número máximo de vueltas
    if (this.playCount >= this.maxPlays) {
      console.log("Reproducción detenida después de " + this.maxPlays + " vueltas.");
      return;
    }

    const currentVideo:ListtiktokvideosI = this.videoIds[this.currentIndex];
    this.currentVideoId = currentVideo.video_id; 
    this.ngZone.runOutsideAngular(() => {
      this.interval = setTimeout(() => {
        this.ngZone.run(() => {
          console.log('next')
          this.nextVideo();
        });
      }, currentVideo.duration* 1000); // Tiempo en milisegundos
    });
  }

  nextVideo() {
    this.currentIndex = (this.currentIndex + 1) % this.videoIds.length;

    // Incrementar el contador de vueltas si llegamos al final del array
    if (this.currentIndex === 0) {
      this.playCount++;
    }

    this.playNextVideo();
  }

  previousVideo() {
    this.currentIndex = (this.currentIndex - 1 + this.videoIds.length) % this.videoIds.length;
    this.playNextVideo();
  }

  selectVideo(index: number) {
    this.currentIndex = index;
    this.playNextVideo();
  }
}
