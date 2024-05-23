import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { PermissionInterface } from '../../models/permission.interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { WikispaceInterface } from '../../models/wikispace.interface';
import { FirebaseService } from '../../services/firebase.service';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-dialog-delete-sure',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './dialog-delete-sure.component.html',
  styleUrl: './dialog-delete-sure.component.css'
})
export class DialogDeleteSureComponent {
  wikispace!: WikispaceInterface;

  constructor(@Inject(MAT_DIALOG_DATA) public data:WikispaceInterface, private firebaseService: FirebaseService, private system: SystemService) {
    this.wikispace = data;
  }

  deleteWikispace() {
    if(this.wikispace.id) {
      this.firebaseService.deleteWikispace(this.wikispace.id).subscribe(() => {
        console.log('Document deleted');
      });
    }
  }
}
