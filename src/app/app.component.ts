// import { GeoService } from './geo.service';
import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service';
import { Location } from './location.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'location-tracker';
  lat: number = 6.799154;
  lng: number = 79.9;
  date: string = "";
  time: string = "";
  d: Date;

  markers: any;
  locations: Location[];

  constructor(private locationService: LocationService) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.locationService.getLocations().subscribe(data => {
      console.log("location data", data);
      this.locations = data.map(e => {
        this.time = e.payload.doc.data()["time"];
        this.date = e.payload.doc.data()["date"];
        
        this.lat = e.payload.doc.data()[0];
        this.lng = e.payload.doc.data()[1];
        this.d = new Date(this.date +'T'+ this.time + 'Z');
        console.log('')
        return {
          id: e.payload.doc.id,
          latitude : e.payload.doc.data()[0],
          longitude: e.payload.doc.data()[1],

        }as Location;
      })
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
