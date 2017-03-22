import { Component } from '@angular/core';
import { OpenWeatherMapService } from '../../services/openweathermap.service';
import { Weather } from '../../../Weather';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
  // styleUrls: ['./app.component.css']
})
export class HomeComponent {
  zipcode: string;
  weatherRes: Weather[];

  constructor(private _openweathermapService:OpenWeatherMapService){

  }

  updateZipcode(){
    if (this.zipcode.length >= 5){
      this._openweathermapService.getWeather(this.zipcode).subscribe(res => {
        this.weatherRes = res;
      });
    }
  }

}
