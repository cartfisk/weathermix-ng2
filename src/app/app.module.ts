import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { PlaylistComponent } from './components/playlist/playlist.component';
import { WeatherComponent } from './components/weather/weather.component';

import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { PlayerComponent } from './components/pages/player.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from 'angular2-google-maps/core';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    WeatherComponent,
    HomeComponent,
    AboutComponent,
    PlayerComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBq-QPrrhl3NhgVeZrCq-btAtFy4NSUrBQ'
    }),
  ],
  exports: [AgmCoreModule],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
