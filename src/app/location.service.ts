import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private firestore: AngularFirestore) {}

  // tslint:disable-next-line:typedef
  getLocation() {
    return this.firestore.collection('location1').snapshotChanges();
  }
}
