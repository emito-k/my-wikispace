import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-dialog-create-wikispace-form',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './dialog-create-wikispace-form.component.html',
  styleUrl: './dialog-create-wikispace-form.component.css'
})
export class DialogCreateWikispaceFormComponent {

}
