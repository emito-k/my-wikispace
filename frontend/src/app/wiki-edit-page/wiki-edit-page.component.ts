import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../shared/services/firebase.service';
import { WikiInterface } from '../shared/models/wiki.interface';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, setDoc, getDoc } from '@angular/fire/firestore';


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

  constructor(private router: ActivatedRoute, private firebaseService: FirebaseService) {
    // { path: 'wiki/:wiki_id/w/:wiki_page_id', component: WikiEditPageComponent }
    this.router.params.subscribe((params) => {
      // get wiki_id and wiki_page_id from params
      this.wiki_id = params['wiki_id'];
      this.wiki_page_id = params['wiki_page_id'];

      // get wiki from firebaseService
      this.firebaseService.getWiki(this.wiki_id, this.wiki_page_id).subscribe((wiki) => {
        console.log('change!');
        this.wiki = wiki;
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
}
