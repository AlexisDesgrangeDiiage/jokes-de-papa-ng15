import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { postsMock } from '../data/posts.mock';
import { Post } from '../models/post.interface';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: Post[] = postsMock
  posts$!: Observable<Post[]>;
  post?: Post;
  id?: number;
  constructor(private route: ActivatedRoute, private _postService: PostService) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });

    this.post = postsMock.find((post) => post.id === this.id);
    // this.post = this.posts$.pipe(
    //   map((posts : Post[] => {
    //     return posts.filter((post: Post) => post.id === this.id
    // }));


  }

  private getPosts(){
      this.posts$ = this._postService.getPosts()
  }
}
