import { Component } from '@angular/core';
import { RedditServiceService } from './reddit-service.service';
import {Reddit, RedditI} from "./Reddit"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'RedditAPI';
  posts: RedditI[] = [];
  constructor(private redditAPI: RedditServiceService){

  }

getPosts(): void{
this.redditAPI.displayReddit()
.subscribe(
(response: RedditI) => {
  
  let name: string = "Hello"
  console.log(name);
  console.dir(this.posts);
  this.posts.push(response);
}
)
}
}