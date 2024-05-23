import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, setDoc } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { WikispaceInterface } from '../models/wikispace.interface';

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

  createWikispace(data: WikispaceInterface): Observable<void> {

    const promise = addDoc(this.wikiSpaces, data).then(
      (docRef) => {
        console.log('Document written with ID: ', docRef.id);
      }
    ).catch(
      (error) => {
        console.error('Error adding document: ', error);
      }
    );

    return from(promise);
  }

  deleteWikispace(doc_id: string): Observable<void> {
    const docRef = doc(this.wikiSpaces, doc_id);

    // Delete the document
    const promise = deleteDoc(docRef);
    return from(promise);
  }

  updateWikispace(data: WikispaceInterface): Observable<void> {
    const docRef = doc(this.wikiSpaces, data.id);
    // remove id from data
    delete data.id;

    const promise = setDoc(docRef, data, { merge: true });
    return from(promise);
  }
}
