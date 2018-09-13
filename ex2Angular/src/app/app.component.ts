import {Component, OnInit} from '@angular/core';
import { Post } from './models/post.model';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Posts';
  posts: Post[];

  constructor(private postsService: PostService) {}

  ngOnInit() {
    this.posts = this.postsService.posts;
  }
}
