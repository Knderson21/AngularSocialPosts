import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  @Input() post:Post = {} as Post;
  /*output will send the post back to socialPosts, socialPosts will 
  compare this post to all posts and delete the matching one */
  @Output() deleted = new EventEmitter<Post>();

  /*
  below is the same as above without as post
  @Input() post:Post = {
    title: "",
    thought: ""
  };
  */
  constructor() { }

  ngOnInit(): void {
  }

  upvote():void{
    this.post.votes++;
  }

  downvote():void{
    this.post.votes--;
  }

  delete():void{
    this.deleted.emit(this.post);
  }

}
