import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RedditI} from './Reddit';
@Injectable({
  providedIn: 'root'
})
export class RedditServiceService {

  constructor(private http: HttpClient) { }

  displayReddit(): Observable<RedditI>{
    return this.http.get<RedditI>("https://www.reddit.com/r/aww/.json");
  }
}
