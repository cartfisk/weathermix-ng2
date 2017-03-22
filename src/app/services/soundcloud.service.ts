import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SoundcloudService{
  private playlistUrl: string;

  constructor(private _http: Http){

  }

  getPlaylist(str:string, type='playlist'){
    this.playlistUrl = 'https://api.soundcloud.com/';
    
  }
}
