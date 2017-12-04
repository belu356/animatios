import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../post';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post:Post;


  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getPost(params['id']);
    });
  }

private getPost(id: number){
  this.postService.getPost(id).subscribe(post=>{
    this.post = post;
  });

}
}
