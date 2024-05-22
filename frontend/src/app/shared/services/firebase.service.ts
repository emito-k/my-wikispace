import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore = inject(Firestore);
  wikiSpaces = collection(this.firestore, 'Wikispaces');

  constructor() { }

  getWikiSpaces(): Observable<any> {
    return collectionData(this.wikiSpaces, { idField: 'id' }) as Observable<any>;
  }
}
