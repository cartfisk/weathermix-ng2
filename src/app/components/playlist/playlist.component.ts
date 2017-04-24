import { Component, OnInit, Input } from '@angular/core';

import { DomSanitizer } from "@angular/platform-browser";

import { FileService } from '../../services/file.service';

@Component({
  moduleId: module.id,
  selector: 'playlist',
  templateUrl: 'playlist.component.html'
  // styleUrls: ['./app.component.css']
})
export class PlaylistComponent implements OnInit{
  @Input() soundcloudURI: String;
  playlistURL: any;
  // playlistURL = this._domSanitizer.bypassSecurityTrustResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/305352447&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
  playlistID: String;
  playlistIDs: any;

  constructor(private _fileService:FileService, private _domSanitizer : DomSanitizer){

  }

  ngOnInit(){
    // console.log(this.soundcloudURI);
    this.playlistURL = this._domSanitizer.bypassSecurityTrustResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/" + this.soundcloudURI + "&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
  }

}
