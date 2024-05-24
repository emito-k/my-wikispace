import { Injectable, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, user, signOut } from '@angular/fire/auth';
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
    });

    return from(promise);
  }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password).then((response) => {});
    console.log(this.currentUserSig())
    return from(promise);
  }

  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth).then(() => {});

    return from(promise);
  }
}
