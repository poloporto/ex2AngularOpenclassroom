import {Component, OnInit} from '@angular/core';
import { Post } from './models/post.model';
import { PostService } from './services/post.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }
}
