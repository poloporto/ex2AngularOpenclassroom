import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() id: number;
  created_at: Date = new Date();


  constructor(private postsService: PostService) {}

  ngOnInit() {
  }

  getColor() {
    if (this.loveIts > 0) {
      return 'list-group-item-success';
    }
    else if (this.loveIts < 0)
      return 'list-group-item-danger';
    else
      return 'list-group-item';
  }

  like(id: number) {
    this.loveIts += 1;
    this.postsService.like(id);
  }

  dislike(id: number) {
    this.loveIts -= 1;
    this.postsService.dislike(id);
  }

  deletePost(id: number){
    this.postsService.removePost(id);
  }

}
