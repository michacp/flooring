import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-facebook-post-modal',
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './facebook-post-modal.component.html',
  styleUrl: './facebook-post-modal.component.css'
})
export class FacebookPostModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  
  get selectedPost() { 
    return this.data.selectedPost;
  }
}
