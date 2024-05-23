import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { PermissionInterface } from '../../models/permission.interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
  permissions: PermissionInterface[] = [
    { name: 'Public', description: 'Everyone can view and edit' },
    { name: 'Protected', description: 'Everyone can view pages, only wiki members users can edit' },
    { name: 'Private', description: 'Only wiki members can view and edit' }
  ];

  chosenPermission: PermissionInterface = this.permissions[0];

  description: string = '';
  constructor(public dialog: MatDialog) { }
}
