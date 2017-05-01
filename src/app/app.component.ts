import { Component } from '@angular/core';
import { OpenWeatherMapService } from './services/openweathermap.service';
import { UnsplashService } from './services/unsplash.service';
import { FileService } from './services/file.service';
import { GeolocationService } from './services/geolocation.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss'],
  providers: [ OpenWeatherMapService, UnsplashService, FileService, GeolocationService, DataService ]
})
export class AppComponent {

}
