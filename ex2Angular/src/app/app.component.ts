import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Posts';

  postsArray = [{title: "mon premier post", content: "hey hey", loveIts: 0},
                {title: "mon deuxieme post", content: "hey hey hey ", loveIts: 0}];
}
