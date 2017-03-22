import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OpenWeatherMapService{

  private zipcode: string;
  private weatherUrl: string;
  private app_id = 'b84bed13d654df469398701da69d1071';

  constructor(private _http: Http){

  }

  getWeather(str:string){
    this.weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?zip='+str+',us&APPID='+this.app_id+'&units=imperial';
    return this._http.get(this.weatherUrl)
      .map(res => res.json());
  }
}
