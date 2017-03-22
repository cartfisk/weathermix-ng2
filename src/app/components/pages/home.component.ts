import { Component } from '@angular/core';
import { OpenWeatherMapService } from '../../services/openweathermap.service';
import { WeatherCondition } from '../../../WeatherCondition';
import { WeatherStats } from '../../../WeatherStats';


@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
  // styleUrls: ['./app.component.css']
})
export class HomeComponent {
  zipcode: string;
  weatherCond: WeatherCondition[];
  weatherStats: WeatherStats[];

  constructor(private _openweathermapService:OpenWeatherMapService){

  }

  updateZipcode(){
    if (this.zipcode.length >= 5){
      this._openweathermapService.getWeather(this.zipcode).subscribe(res => {
        console.log(res);
        this.weatherCond = res.weather[0];
        this.weatherStats = res.main;
      });
    }
  }

}
