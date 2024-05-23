import { Component, Input } from '@angular/core';
import { WikiInterface } from '../../models/wiki.interface';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DialogDeleteWikiPageSureComponent } from '../dialog-delete-wiki-page-sure/dialog-delete-wiki-page-sure.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-wiki-page-card',
  standalone: true,
  imports: [
    MatProgressBarModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    DialogDeleteWikiPageSureComponent
  ],
  templateUrl: './wiki-page-card.component.html',
  styleUrl: './wiki-page-card.component.css'
})
export class WikiPageCardComponent {
  @Input({ required: true }) wiki!: WikiInterface;
  @Input({ required: true }) wiki_id!: string;

  constructor(private dialog: MatDialog) {

  }

  openDeleteDialog() {
    this.dialog.open(DialogDeleteWikiPageSureComponent, {
      data: {wiki: this.wiki, wikispace_doc_id: this.wiki_id}
    });
  }
}
