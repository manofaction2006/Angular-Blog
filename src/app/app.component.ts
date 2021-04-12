import { Component } from '@angular/core';
import { Post } from 'src/Post';
import { User } from 'src/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog-Template';
  posts: Post[] = [];
  users: User[]= [];
  log: boolean;
  
  constructor(){
    this.posts = [
      {sno: this.posts.length, title: "hi", content: "this"}
    ]
    this.users = [
      {sno: this.users.length, email: "abc@gmail.com", password: "admin"}
    ]
  }

  login(obj: User):void{
    this.users.forEach(ele => {
      if (ele.email == obj.email) {
        this.log = true
      }
    })
  }

}
