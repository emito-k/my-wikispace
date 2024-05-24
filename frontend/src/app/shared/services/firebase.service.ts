import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, setDoc, onSnapshot } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { WikispaceInterface } from '../models/wikispace.interface';
import { WikiInterface } from '../models/wiki.interface';
import { User } from '@angular/fire/auth';
import { UserInterface } from '../models/user.interface';

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
    // add document in wikispaces

    const promise = addDoc(this.wikiSpaces, data).then(
      (docRef) => {
        console.log('Document written with ID: ', docRef.id);
        // add subcollection in wikispace within
        const wikiCollection = collection(doc(this.wikiSpaces, docRef.id), 'wiki');

        const wikiData: WikiInterface = {
          title: 'Tutorial',
          content: 'Welcome to your new wiki space'
        };

        addDoc(wikiCollection, wikiData).then(
          (docRef) => {
            console.log('Document written with ID: ', docRef.id);
          }
        ).catch(
          (error) => {
            console.error('Error adding document: ', error);
          }
        );
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

  getWikis(doc_id: string): Observable<any> {
    const wikiCollection = collection(doc(this.wikiSpaces, doc_id), 'wiki');
    return collectionData(wikiCollection, { idField: 'id' }) as Observable<any>;
  }

  getWiki(doc_id: string, wiki_id: string): Observable<any> {
    // use on snapshot
    const wikiDoc = doc(this.wikiSpaces, `${doc_id}/wiki/${wiki_id}`);
    const promise = new Observable((observer) => {
      onSnapshot(wikiDoc, (doc) => {
        observer.next(doc.data());
      });
    });

    return promise;
  }

  createWiki(doc_id: string, data: WikiInterface): Observable<void> {
    const wikiCollection = collection(doc(this.wikiSpaces, doc_id), 'wiki');
    const promise = addDoc(wikiCollection, data).then(() => {});
    return from(promise);
  }

  deleteWiki(doc_id: string, wiki_id: string): Observable<void> {
    const wikiDoc = doc(this.wikiSpaces, `${doc_id}/wiki/${wiki_id}`);
    const promise = deleteDoc(wikiDoc);
    return from(promise);
  }

  updateWiki(doc_id: string, data: WikiInterface): Observable<void> {
    console.log('updateWiki', `${doc_id}/wiki/${data.id}`);
    const wikiDoc = doc(this.wikiSpaces, `${doc_id}/wiki/${data.id}`);
    delete data.id;
    const promise = setDoc(wikiDoc, data, { merge: true });
    return from(promise);
  }

  // function that creates a document inside the collaborators subcollection of the wiki document
  // it just has the user name received from authservice
  // it gets called when the user enters the wiki and another function to remove the user from the collaborator
  // collaborator is someone actively editing the wiki
  addCollaborator(doc_id: string, wiki_id: string, user: UserInterface): Observable<void> {
    const wikiDoc = doc(this.wikiSpaces, `${doc_id}/wiki/${wiki_id}/collaborators/${user.uid}`);
    const promise = setDoc(wikiDoc, user);
    return from(promise);
  }

  removeCollaborator(doc_id: string, wiki_id: string, user: UserInterface): Observable<void> {
    const wikiDoc = doc(this.wikiSpaces, `${doc_id}/wiki/${wiki_id}/collaborators/${user.uid}`);
    const promise = deleteDoc(wikiDoc);
    return from(promise);
  }

  getCollaborators(doc_id: string, wiki_id: string): Observable<any> {
    // collaborators collection
    const collaboratorsCollection = collection(doc(this.wikiSpaces, `${doc_id}/wiki/${wiki_id}`), 'collaborators');
    console.log('getCollaborators');
    console.log( collaboratorsCollection);
    return collectionData(collaboratorsCollection) as Observable<any>;

  }
}
