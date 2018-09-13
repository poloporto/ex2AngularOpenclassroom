import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  title = "Nouveau post";
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postsService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmitForm() {
    const formValue = this.postForm.value;
    const newPost = new Post(
      formValue['title'],
      formValue['content'],
      0
    );
    this.postsService.createNewPost(newPost);
    this.postsService.emitPosts();
    this.router.navigate(['/posts']);
  }

}
