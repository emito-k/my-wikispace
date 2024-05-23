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
  selector: 'app-dialog-update-wikispace-form',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './dialog-update-wikispace-form.component.html',
  styleUrl: './dialog-update-wikispace-form.component.css'
})
export class DialogUpdateWikispaceFormComponent {
  permissions: PermissionInterface[] = [];

  title = "Sample Title"
  chosenPermission: PermissionInterface = this.permissions[0];

  description: string = 'Sample';
  constructor(@Inject(MAT_DIALOG_DATA) public data:WikispaceInterface, private firebaseService: FirebaseService, private system: SystemService) {
    this.permissions = this.system.getPermissions();
    this.chosenPermission = this.permissions[0];
    this.wikispace = data;
  }

  wikispace!: WikispaceInterface;

  updateWikispace() {
    this.firebaseService.updateWikispace({
      title: this.title,
      content: this.description,
      access: this.chosenPermission.name
    });
  }

}
