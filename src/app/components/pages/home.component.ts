import { Component } from '@angular/core';

import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { OpenWeatherMapService } from '../../services/openweathermap.service';
import { WeatherCondition } from '../../../WeatherCondition';
import { WeatherStats } from '../../../WeatherStats';


@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
  // styleUrls: ['apphome.component.scss']
})
export class HomeComponent {
  zipcode: string;
  weatherCond: WeatherCondition[];
  weatherStats: WeatherStats[];

  constructor(private _openweathermapService:OpenWeatherMapService, private _router:Router){

  }

  updateZipcode(){
    if (this.zipcode.length >= 5){
      this._openweathermapService.getWeather(this.zipcode).subscribe(res => {
        this.weatherCond = res.weather[0];
        this.weatherStats = res.main;
      });
      this._router.navigate(['/player']);
    }
  }

}
