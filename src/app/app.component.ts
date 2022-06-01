import { Component } from '@angular/core';
import { RedditServiceService } from './reddit-service.service';
import {Reddit} from "./Reddit"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'RedditAPI';
  posts: Reddit[] = [];
  constructor(private redditAPI: RedditServiceService){

  }

getPosts(): void{
this.redditAPI.displayReddit()
.subscribe(
(response: Reddit) => {
  console.log(response);
  let name: string = "Hello"
  console.log(name);
  console.dir(this.posts);
  this.posts.push(response);
}
)
}
}