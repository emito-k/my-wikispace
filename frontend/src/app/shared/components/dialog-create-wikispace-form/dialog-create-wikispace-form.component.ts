import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
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
  selector: 'app-dialog-create-wikispace-form',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './dialog-create-wikispace-form.component.html',
  styleUrl: './dialog-create-wikispace-form.component.css'
})
export class DialogCreateWikispaceFormComponent {
  permissions: PermissionInterface[] = [];

  title = "Sample Title"
  chosenPermission: PermissionInterface = this.permissions[0];

  description: string = 'Sample';
  constructor(public dialog: MatDialog, private firebaseService: FirebaseService, private system: SystemService) {
    this.permissions = this.system.getPermissions();
    this.chosenPermission = this.permissions[0];
  }

  createWikispace() {
    this.firebaseService.createWikispace({
      title: this.title,
      content: this.description,
      access: this.chosenPermission.name
    });
  }


}
