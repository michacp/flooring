import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacebookApiService {
  private http = inject(HttpClient);
  private accessToken = environment.facebook_token;

  getAlbumWithPhotos(albumId: string): Observable<any> {
    const url = `https://graph.facebook.com/v20.0/${albumId}?fields=photos.limit(4){source,name,link,from{id,name},likes.summary(true)}&access_token=${this.accessToken}`;
    return this.http.get(url);
  }
}
