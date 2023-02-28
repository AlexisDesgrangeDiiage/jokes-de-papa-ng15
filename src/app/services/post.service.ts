import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this._httpClient.get<Post[]>('http://localhost:3001/posts')
      .pipe(map((post) => {
        return post
      }))
  }
}

