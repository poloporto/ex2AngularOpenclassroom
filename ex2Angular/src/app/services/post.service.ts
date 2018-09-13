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

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postE1) => {
        if (postE1 === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }
}
