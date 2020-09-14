// import { GeoService } from './geo.service';
import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'location-tracker';
  lat: number;
  lng: number;

  markers: any;
  locations: any[];

  constructor(private locationService: LocationService) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getUserLocation();
    console.log('firebase');
    this.locationService.getLocation().subscribe((data) => {
      this.locations = data.map((e) => {
        console.log('eeeeeeeee', e);
      });
    });
    // this.geo.hits.subscribe((hits) => (this.markers = hits));
  }

  // tslint:disable-next-line:typedef
  private getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        // this.geo.getLocation(500, [this.lat, this.lng]);
      });
    }
  }
}
