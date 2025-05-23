import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
export interface FacebookMediaData {
  type: 'image' | 'video';
  src: string; 
} 
@Component({
  selector: 'app-facebook-post-modal',
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './facebook-post-modal.component.html',
  styleUrl: './facebook-post-modal.component.css'
})
export class FacebookPostModalComponent {
  currentIndex = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { selectedPost: FacebookMediaData[] }) {}

  get selectedPost(): FacebookMediaData {
    return this.data.selectedPost[this.currentIndex];
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.data.selectedPost.length;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.data.selectedPost.length) % this.data.selectedPost.length;
  }
}
