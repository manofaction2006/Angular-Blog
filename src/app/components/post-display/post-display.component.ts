import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/Post';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css']
})
export class PostDisplayComponent implements OnInit {
  @Input() posts: Post[] = history.state.data;
  constructor() { }

  ngOnInit(): void {
    console.log(this.posts)
  }

}
