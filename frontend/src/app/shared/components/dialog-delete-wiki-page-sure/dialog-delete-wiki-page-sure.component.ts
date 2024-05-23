import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { WikiInterface } from '../../models/wiki.interface';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-dialog-delete-wiki-page-sure',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './dialog-delete-wiki-page-sure.component.html',
  styleUrl: './dialog-delete-wiki-page-sure.component.css'
})
export class DialogDeleteWikiPageSureComponent {
  wiki!: WikiInterface;
  wikispace_doc_id!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data:{wiki: WikiInterface, wikispace_doc_id: string}, private firebaseService: FirebaseService) {
    this.wiki = data.wiki;
    this.wikispace_doc_id = data.wikispace_doc_id;
  }

  deleteWikispace() {
    if(this.wiki.id) {
      this.firebaseService.deleteWiki(this.wikispace_doc_id, this.wiki.id).subscribe(() => {
        console.log('Document deleted');
      });
    }
  }
}
