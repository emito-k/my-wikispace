import { Injectable, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, user } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, setDoc } from '@angular/fire/firestore';
import { UserInterface } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ = user(this.firebaseAuth);
  currentUserSig = signal<UserInterface | null | undefined>(undefined);

  constructor(private firebaseAuth: Auth, private firestore: Firestore) { }

  register(email: string, username: string, password: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password).then((response) => {
      updateProfile(response.user, { displayName: username });
      // console.log('User created with ID: ', response.user?.uid);
      // const user = {
      //   uid: response.user?.uid,
      //   email: email,
      //   username: username
      // };
      // const users = collection(this.firestore, 'Users');
      // addDoc(users, user);
    });

    return from(promise);
  }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password).then((response) => {});

    return from(promise);
  }
}
