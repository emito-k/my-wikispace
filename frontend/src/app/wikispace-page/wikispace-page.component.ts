import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../shared/services/firebase.service';
import { WikiInterface } from '../shared/models/wiki.interface';
import { WikiPagesFeedComponent } from '../shared/components/wiki-pages-feed/wiki-pages-feed.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wikispace-page',
  standalone: true,
  imports: [
    WikiPagesFeedComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './wikispace-page.component.html',
  styleUrl: './wikispace-page.component.css'
})
export class WikispacePageComponent {
  wikis : WikiInterface[] = [];
  value = '';
  constructor(private firebaseService: FirebaseService, private router: ActivatedRoute) {
    const wiki_id = this.router.snapshot.paramMap.get('wiki_id');
    this.firebaseService.getWikis(wiki_id ?? '').subscribe(
      (wikis) => {
        this.wikis = wikis;
      }
    );
  }
}
