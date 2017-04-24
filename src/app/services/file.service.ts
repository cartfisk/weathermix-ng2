import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FileService{

  constructor(private _http: Http){

  }

  getPlaylists(){
    return this._http.get("../assets/playlistIDs.json")
      .map(res => res.json());
  }
}
