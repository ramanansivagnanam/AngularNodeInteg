import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/operator/map';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }


  getAllPosts()
  {
    return this.http.get('/posts').map((posts) =>{
      return posts;
    });
  }
}
