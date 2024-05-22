import { Component, Input } from '@angular/core';
import { WikispaceInterface } from '../../models/wikispace.interface';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-wikispaces-feed',
  standalone: true,
  imports: [],
  templateUrl: './wikispaces-feed.component.html',
  styleUrl: './wikispaces-feed.component.css'
})
export class WikispacesFeedComponent {
  @Input() WikiSpaces: WikispaceInterface[] = [];
}
