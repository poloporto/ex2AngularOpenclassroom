import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/post.model';
import {Subscription} from 'rxjs';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  title = 'Posts';
  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostService) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
