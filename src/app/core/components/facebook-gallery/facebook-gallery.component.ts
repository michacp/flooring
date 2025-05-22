import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FacebookApiService } from '../../services/facebook-api/facebook-api.service';  
import { FacebookPostModalComponent } from '../../modals/facebook-post-modal/facebook-post-modal.component';
import { MatDialog } from '@angular/material/dialog';
export interface Post {
  id: string;
  type: 'image' | 'video'; // Puedes agregar más tipos si los usas
  src: string;             // URL del recurso (imagen o video)
  created_time: string | Date; // Fecha en la que se creó el post
  message?: string;        // Texto opcional asociado al post
  permalink_url?: string;  // URL directa al post en Facebook (opcional)
}
@Component({
  selector: 'app-facebook-gallery',
    imports: [CommonModule, TranslateModule,FacebookPostModalComponent ],
  templateUrl: './facebook-gallery.component.html',
  styleUrl: './facebook-gallery.component.css'
})
export class FacebookGalleryComponent {
 post: Post[] = [];
visiblePosts: any[] = [];
postsPerPage = 6;
hasMorePosts = false;
selectedPost: any = null;
imgFB:String=''
nameFB:String=''
constructor(private fbService: FacebookApiService,private dialog: MatDialog) {}

ngOnInit(): void {
  this.fbService.album$.subscribe(data => {
    if (data) {
      
      this.nameFB=data.name
      this.imgFB=data.picture.data.url
      this.post = this.normalizePosts(data.feed.data);
      console.log(this.post)
      this.loadCarousel(); 
    }
  });
}

normalizePosts(data: any[]): any[] {
  return data.flatMap(post => {
    const attachments = post.attachments?.data ?? [];
    return attachments.map((item:any) => {
      const isVideo = !!item.media?.source;
      return {
        type: isVideo ? 'video' : 'image',
        src: isVideo ? item.media.source : item.media?.image?.src,
        created_time: post.created_time,
        url: item.target?.url ?? null
      };
    });
  });
}

loadCarousel(): void {
  const current = this.visiblePosts.length;
  const next = this.post.slice(current, current + this.postsPerPage);
  this.visiblePosts.push(...next);
  this.hasMorePosts = this.visiblePosts.length < this.post.length;
}

loadMore(): void {
  this.loadCarousel();
}

 openModal(post: any) {
    this.selectedPost = post;  
     
this.dialog.open(FacebookPostModalComponent, {
  data: { selectedPost: this.selectedPost }, 
  panelClass: 'fullscreen-dialog',
  hasBackdrop: true,
  backdropClass: 'custom-backdrop',
  disableClose: false
});

    } 
}
