import { Component, Input } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { WikispaceInterface } from '../../models/wikispace.interface';
import { MatIconModule } from '@angular/material/icon';
import { FirebaseService } from '../../services/firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogUpdateWikispaceFormComponent } from '../dialog-update-wikispace-form/dialog-update-wikispace-form.component';

@Component({
  selector: 'app-wikispace-card',
  standalone: true,
  imports: [
    MatProgressBarModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './wikispace-card.component.html',
  styleUrl: './wikispace-card.component.css'
})
export class WikispaceCardComponent {
  @Input({ required: true }) wikispace!: WikispaceInterface;

  constructor(private firebaseService: FirebaseService, private dialog: MatDialog) { }

  deleteWikispace(doc_id: string) {
    this.firebaseService.deleteWikispace(doc_id).subscribe(() => {
      console.log('Document deleted');
    });
  }

  openUpdateDialog() {
    this.dialog.open(DialogUpdateWikispaceFormComponent, {
      data: this.wikispace
    });
  }
}
