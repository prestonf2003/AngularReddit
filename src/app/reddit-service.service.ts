import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Reddit} from './Reddit';
@Injectable({
  providedIn: 'root'
})
export class RedditServiceService {

  constructor(private http: HttpClient) { }

  displayReddit(): Observable<Reddit>{
    return this.http.get<Reddit>("https://www.reddit.com/r/aww/");
  }
}
