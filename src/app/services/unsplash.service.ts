import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UnsplashService{
  // private appId = "26bca8e6843cbda584d5090ea6d774fbe00ffa43a50cf8b16d89a421260f5883";
  private appId = "d3faa3d5d3c8610bb70730d0d0e12de4eaf485b926e1cfc5e477cc2a347f87b2";
  private unsplashUrl: string;


  constructor(private _http: Http){

  }

  getImage(query:string){
    this.unsplashUrl = "https://api.unsplash.com/photos/random?client_id=" + this.appId + "&query='" + query + "'";
    return this._http.get(this.unsplashUrl)
      .map(res => res.json());
  }
}
