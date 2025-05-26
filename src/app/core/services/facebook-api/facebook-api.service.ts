import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { environment } from '../../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FacebookApiService {
      private albumSubject = new BehaviorSubject<any>(null); // valor inicial null
  album$ = this.albumSubject.asObservable(); // observable para componentes
  private accessToken = environment.facebook_token;
  private pageId=environment.page_Id
   constructor(private http: HttpClient) {}
  // Solo se llama una vez (cuando inicia la app)
  fetchAlbum(): Observable<any> {
    const url = `https://graph.facebook.com/v22.0/${this.pageId}?fields=name,picture,feed.limit(10){message,permalink_url,attachments{media,subattachments},created_time}&access_token=${this.accessToken}`
    //`https://graph.facebook.com/v22.0/${this.pageId}/posts?fields=message,attachments{media,subattachments},created_time&limit=4&access_token=${this.accessToken}`;

    return this.http.get(url).pipe(
      tap(data => this.albumSubject.next(data)) // actualiza el valor
    );
  }
  // Acceso a los datos ya cargados
 

  //  getReels( ): Observable<any> {
  //   //const url = `https://graph.facebook.com/v20.0/${albumId}?fields=photos.limit(4){source,name,link,from{id,name},likes.summary(true)}&access_token=${this.accessToken}`;
  // const url = `https://graph.facebook.com/v22.0/${this.pageId}/video_reels?fields=id,created_time,description,media_url,permalink_url,thumbnail_url,length&limit=4&access_token=${this.accessToken}`
  //   return this.http.get(url);
  // }
}


 


// {
//   "data": [
//     {
//       "name": "Suarez Discount Flooring",
//       "id": "100604342676430",
//       "access_token": "EAAVtYZCepZB6QBOZBesHrkSNqnZBKZAU41Pd7dVxwlN3E0RLGMuOd8FdO4UF3ZC4IB4aubx9dM9cWtcpzZBVMHhdYLLwlecZBuM2y8xYhvefIU6M1mF57aO0fAfZCQAkboWg141vDcZCAOxVlE5eLXIpponxLj6wZC7mjb6h9gImdci2eCX497lBdw4EuZBQnaWXZC8Eu4sRMLNFeM0WidHdlfUelj5cZD"
//     },
//     {
//       "name": "Chevalier barber/shop",
//       "id": "106857184232015",
//       "access_token": "EAAVtYZCepZB6QBO0knnJfZBMlwH17qZCBplFhZAhwxXx0KOGjaiiH1yV0QGj2dGvWDF8LMSjoyib7NdutZAZCyJr6S8Syr4LAhUWGCQqUZCgZCoUSU6S97FHn0vt7TrAeLwPp7pZAwfdAvZBxBdFS711BZBMjWKinZAQpx4tjrBDCcKVvOzIOJE0V8rRGPI3PgTcjSAFdm6PfWBh26XBZA6RY1wUCZBTboZD"
//     },
//     {
//       "name": "TeamCellmania",
//       "id": "1507811922785042",
//       "access_token": "EAAVtYZCepZB6QBO8V2NHxH0cgXqAlr3Yhog0PfSSP3x9NFFGq5ZBCJC9Q4wk9GnANHN48RQovbSeMSarHNuAsPq6lJ5jyZBEZAPDwk2CJZCsmZAB0yBIhyM3Ne1RiVg6LERNJRZAHVliZAZAH08nUwYxdU5MT2IZCJlamVuWem69W5Y9j80BW3MTB4QuJZBGobFERVbaEthPgE1OUW5zzRIG7w8v8x1D"
//     }
//   ],
//   "paging": {
//     "cursors": {
//       "before": "QVFIUmlYMUpCSnFSdktMNFRHelhZAWFRYTTk2ZAWlhLUk1YTNFbnZAHMzk1QUpodEJOUjludkhUOWxVb2tHbjAyZAHZAmOEhCMVhuVGZAOZAzdiOTNLSVViMGpOZAkdn",
//       "after": "QVFIUmNxVXR0N1lJcnExdFk4YkRCWm96WjRBelJBdk52MmlGMG1aZAVdJUk03N21PdGJ5Y1F6c3JJRGhmTFNKZAG0xMVVRTW1HeTk5el9SZA0VBWWVVb19IRkR3"
//     }
//   }
// }