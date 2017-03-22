import { Component } from '@angular/core';
import { OpenWeatherMapService } from './services/openweathermap.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ OpenWeatherMapService ]
})
export class AppComponent {

}
