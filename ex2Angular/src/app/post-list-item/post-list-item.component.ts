import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  created_at: Date = new Date();

  getColor(){
    if (this.loveIts > 0)
      return 'list-group-item-success';
    else if (this.loveIts < 0)
      return 'list-group-item-danger';
    else
      return 'list-group-item';
  }

  like()
  {
    this.loveIts+=1;
  }

  dislike()
  {
    this.loveIts-=1;
  }

  constructor() { }

  ngOnInit() {
  }

}
