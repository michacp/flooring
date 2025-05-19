import { Component, Input, OnChanges, SimpleChanges, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tiktok-video',
  imports: [],
  templateUrl: './tiktok-video.component.html',
  styleUrl: './tiktok-video.component.css'
})
export class TiktokVideoComponent {
  @Input() videoId!: string;
  tiktokUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer,private renderer: Renderer2) {}

  ngOnInit(): void {
     
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['videoId']) {
      this.updateVideoUrl();
    }
  } 
  updateVideoUrl(): void {
    this.tiktokUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.tiktok.com/embed/v2/${this.videoId}`
    );
  }
}
