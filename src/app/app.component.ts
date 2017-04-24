import { Component } from '@angular/core';
import { OpenWeatherMapService } from './services/openweathermap.service';
import { FileService } from './services/file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss'],
  providers: [ OpenWeatherMapService, FileService ]
})
export class AppComponent {

}
