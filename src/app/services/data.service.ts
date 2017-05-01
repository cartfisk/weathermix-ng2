import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService{

  private location: any;

  constructor(private _http: Http){
    this.location = {
      zip: "",
      coords: {
        lat: "",
        lon: ""
      }
    };
  }

  setZipcode(zip:string){
    this.location.zip = zip;
    this.location.coords = {
      lat: '',
      lon: ''
    };
  }

  setCoords(lat: string, lon: string){
    this.location.zip = null;
    this.location.coords.lat = lat;
    this.location.coords.lon = lon;
  }

  getLocation(){
    return this.location;
  }

}
