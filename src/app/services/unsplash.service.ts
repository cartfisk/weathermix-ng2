import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UnsplashService{
  private appId = "26bca8e6843cbda584d5090ea6d774fbe00ffa43a50cf8b16d89a421260f5883";
  private unsplashUrl: string;


  constructor(private _http: Http){

  }

  getImage(query:string){
    this.unsplashUrl = "https://api.unsplash.com/photos/random?client_id=" + this.appId + "&query='" + query + "'";
    return this._http.get(this.unsplashUrl)
      .map(res => res.json());
  }
}
