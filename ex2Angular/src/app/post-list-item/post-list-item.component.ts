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

  like() {
    this.loveIts += 1;
    this.postsService.like(this.id);
  }

  dislike() {
    this.loveIts -= 1;
    this.postsService.dislike(this.id);
  }

  deletePost(id: number){
    this.postsService.removePost(id);
  }

}
