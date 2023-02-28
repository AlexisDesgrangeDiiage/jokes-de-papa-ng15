import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { postsMock } from '../data/posts.mock';
import { Post } from '../models/post.interface';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'jokes-de-papa-ng15';
  posts: Post[] = postsMock
  posts$!: Observable<Post[]>;

  constructor(private _postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }
  private getPosts(){
    this.posts$ = this._postService.getPosts()
}

}
