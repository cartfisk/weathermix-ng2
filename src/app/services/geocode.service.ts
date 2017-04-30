import { Injectable, NgZone } from '@angular/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { MapsAPILoader } from 'angular2-google-maps/core';
import 'rxjs/add/operator/map';

declare var google: any;

@Injectable()
export class GeocodeService extends GoogleMapsAPIWrapper {

    constructor(private __loader: MapsAPILoader, private __zone: NgZone) {
        super(__loader, __zone);
    }

    getZip(lat: number, long: number) {
        var zip: string;
        this.__loader.load().then(() => {
            console.log('MapsAPILoader loaded successfully.');
            var point = new google.maps.LatLng(lat, long);
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({'latLng': point}, function (res, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    console.log('geocoder active');
                    zip = res[0].formatted_address.match(/,\s\w{2}\s(\d{5})/);
                    console.log('Zip code is ' +  zip[1]);
                } else {
                    console.log('geocoder failed');
                }
            });
        });
        return zip;
    }
}
