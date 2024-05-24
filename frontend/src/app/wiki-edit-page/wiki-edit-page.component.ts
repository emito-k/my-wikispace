import { Component, HostListener } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../shared/services/firebase.service';
import { WikiInterface } from '../shared/models/wiki.interface';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { User } from '@angular/fire/auth';
import { AuthService } from '../shared/services/auth.service';
import { UserInterface } from '../shared/models/user.interface';


@Component({
  selector: 'app-wiki-edit-page',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './wiki-edit-page.component.html',
  styleUrl: './wiki-edit-page.component.css'
})
export class WikiEditPageComponent {
  wiki?: WikiInterface;
  wiki_id!: string;
  wiki_page_id!: string;

  users: UserInterface[] = [];
  user?: UserInterface;

  constructor(private router: ActivatedRoute, private firebaseService: FirebaseService, private authService: AuthService) {
    // { path: 'wiki/:wiki_id/w/:wiki_page_id', component: WikiEditPageComponent }
    this.router.params.subscribe((params) => {
      // get wiki_id and wiki_page_id from params
      this.wiki_id = params['wiki_id'];
      this.wiki_page_id = params['wiki_page_id'];

      // get wiki from firebaseService
      this.firebaseService.getWiki(this.wiki_id, this.wiki_page_id).subscribe((wiki) => {
        console.log('change!');
        this.wiki = wiki;
        console.log(this.authService.currentUserSig());
        this.addUserAsCollaborator(this.authService.currentUserSig());
        this.getCollaborators();
      });
    });
  }

  updateWiki() {
    if (this.wiki) {
      this.firebaseService.updateWiki(this.wiki_id, {
        title: this.wiki.title,
        content: this.wiki.content,
        id: this.wiki_page_id
      }).subscribe(() => {
        console.log('Wiki updated');
      });
    }
  }

  addUserAsCollaborator(user: UserInterface | null | undefined) {
    if (user && this.wiki) {
      this.firebaseService.addCollaborator(this.wiki_id, this.wiki_page_id, user).subscribe(() => {
        console.log('User added as collaborator');
      });
    }
    else {
      console.log('User not added as collaborator');
    }
  }

  removeUserAsCollaborator(user: UserInterface | null | undefined) {
    if (user && this.wiki) {
      this.firebaseService.removeCollaborator(this.wiki_id, this.wiki_page_id, user).subscribe(() => {
        console.log('User removed as collaborator');
      });
    }
    else {
      console.log('User not removed as collaborator');
    }
  }

  getCollaborators() {
    if (this.wiki) {
      this.firebaseService.getCollaborators(this.wiki_id, this.wiki_page_id).subscribe((users) => {
        this.users = users;
      });
    }
  }

  // call function when page is closed
  ngOnDestroy() {
    this.removeUserAsCollaborator(this.authService.currentUserSig());
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHander(event: any) {
    this.removeUserAsCollaborator(this.authService.currentUserSig());
  }
}
