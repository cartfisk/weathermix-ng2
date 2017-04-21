import { Component } from '@angular/core';

import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { WeatherCondition } from '../../../WeatherCondition';
import { WeatherStats } from '../../../WeatherStats';


@Component({
  moduleId: module.id,
  selector: 'player',
  templateUrl: 'player.component.html'
  // styleUrls: ['apphome.component.scss']
})
export class PlayerComponent {
  zipcode: string;
  weatherCond: WeatherCondition[];
  weatherStats: WeatherStats[];

  constructor(private _router:Router){

  }

}
