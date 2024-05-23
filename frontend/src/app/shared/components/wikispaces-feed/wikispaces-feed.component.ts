import { Component, Input } from '@angular/core';
import { WikispaceInterface } from '../../models/wikispace.interface';
import { FirebaseService } from '../../services/firebase.service';
import { WikispaceCardComponent } from '../wikispace-card/wikispace-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@Component({
  selector: 'app-wikispaces-feed',
  standalone: true,
  imports: [
    WikispaceCardComponent,
    FlexLayoutModule
  ],
  templateUrl: './wikispaces-feed.component.html',
  styleUrl: './wikispaces-feed.component.css'
})
export class WikispacesFeedComponent {
  @Input() WikiSpaces: WikispaceInterface[] = [];
  @Input({ required: true }) wiki_id: string = '';
}
