import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { WeatherCondition } from '../../../WeatherCondition';
import { WeatherStats } from '../../../WeatherStats';

import { OpenWeatherMapService } from '../../services/openweathermap.service';
import { UnsplashService } from '../../services/unsplash.service';
import { FileService } from '../../services/file.service';


@Component({
  moduleId: module.id,
  selector: 'player',
  templateUrl: 'player.component.html',
  styleUrls: ['player.component.scss']
})
export class PlayerComponent implements OnInit{
  weatherCond: WeatherCondition[];
  weatherStats: WeatherStats[];
  weatherID: number;
  soundcloudURI: string;
  date: Date;
  location: string;
  unsplashObject: any;

  constructor(
    private _openweathermapService:OpenWeatherMapService,
    private _unsplashService:UnsplashService,
    private _fileService:FileService,
    private _router:Router,
    private _route:ActivatedRoute
  ){

  }

  ngOnInit(){

    this.date = new Date();

    this._route.params
      .map(params => params['zip'])
      .subscribe((zip) => {
        this._openweathermapService.getWeather(zip)
          .subscribe(res => {
            this.weatherCond = res.weather[0];
            this.weatherStats = res.main;
            this.getPlaylist(Number(res.weather[0].id));
            this.location = res.name;
            this.getBackground(res.weather[0].main);
          })
      });
  }

  getPlaylist(weatherID){
    if (weatherID >= 200 && weatherID < 600){
      // rain 3
      // console.log("rain");
      this.getPlaylistWithCondition(3);
    } else
    if (weatherID >= 600 && weatherID < 700){
      // snow 4
      // console.log("snow");
      this.getPlaylistWithCondition(4);
    } else
    if (weatherID >= 700 && weatherID < 900 && weatherID != 800){
      // clouds 2
      // console.log("clouds");
      this.getPlaylistWithCondition(2);
    } else
    if (weatherID === 800){
      if (this.date.getHours() < 18){
        // sun 0
        // console.log("sun");
        this.getPlaylistWithCondition(0);
      } else {
        // clear night 5
        // console.log("clear night");
        this.getPlaylistWithCondition(5);
      }
    } else
    if (weatherID >= 955 && weatherID < 962){
      // wind 1
      // console.log("wind");
      this.getPlaylistWithCondition(1);
    }
  }

  getPlaylistWithCondition(condition: number){
    this._fileService.getPlaylists().subscribe(res => {
      this.soundcloudURI = res[condition].scid[0];
    });
  }

  getBackground(condition: string){
    this._unsplashService.getImage(condition).subscribe(res => {
      this.unsplashObject = res;
    })
  }

}
