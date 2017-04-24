import { Component } from '@angular/core';

import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { OpenWeatherMapService } from '../../services/openweathermap.service';
import { WeatherCondition } from '../../../WeatherCondition';
import { WeatherStats } from '../../../WeatherStats';


@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {
  zipcode: string;

  constructor(private _router:Router){

  }

  updateZipcode(){
    if (this.zipcode.length >= 5){
      this._router.navigate(['/player', this.zipcode]);
      // this._router.navigate(['/player', this.zipcode]);
    }
  }

}
