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
    // this.getUserLocation();
    console.log('firebase');
    this.locationService.getLocation().subscribe((data) => {
      console.log('dataa', data);
      this.locations = data.map((e) => {
        console.log('eeeeeeeee', e.payload.doc.data());
        this.lat = e.payload.doc.data()[0];
        this.lng = e.payload.doc.data()[1];
        console.log(e.payload.doc);
      });
    });
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
