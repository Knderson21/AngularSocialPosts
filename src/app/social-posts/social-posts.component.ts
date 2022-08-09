import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  posts:Post[] = [
    {
      title: "Creed Thoughts!",
      thought: "Hey-o, everyone out there in SyberWorld. It,s old Creed Bratton coming at your again, here from my perch as a Quality Assurance Manager at Dunder Mifflin paper.  Just a few observations on the world around me.",
      votes: 0
    },
    {
      title:"Creed Thoughts!",
      thought: "What do you guys think is the best kind of car? To me, you can,t beat motorcycles. They,re small  and dangerous.",
      votes: 0
    }
  ];
  
  AddToPosts(newPost:Post){
    //unshift adds to start of array
    this.posts.unshift(newPost);
  };

  DeletePost(targetP:Post):void{
    let index:number = this.posts.findIndex(p => p.thought == targetP.thought && p.title == targetP.title);
    this.posts.splice(index,1);
  };

}
