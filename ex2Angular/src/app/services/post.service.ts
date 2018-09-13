import {Post} from '../models/post.model';
import {Subject} from 'rxjs';

export class PostService {
  posts: Post[] = [new Post('mon premier post', 'hey hey', 0), new Post('ah', 'e', 1)];
  postSubject = new Subject<Post[]>();

  emitPosts() {
    this.postSubject.next(this.posts);
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }

  removePost(id: number) {
    this.posts.splice(id, 1);
    this.emitPosts();
  }

  like(id: number) {
    this.posts[id].setLoveIts(this.posts[id].getLoveIts()+1);
    this.emitPosts();
  }

  dislike(id: number) {
    this.posts[id].setLoveIts(this.posts[id].getLoveIts()-1);
    this.emitPosts();
  }
}
