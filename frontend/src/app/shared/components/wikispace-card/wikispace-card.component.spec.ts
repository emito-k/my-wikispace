import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikispaceCardComponent } from './wikispace-card.component';

describe('WikispaceCardComponent', () => {
  let component: WikispaceCardComponent;
  let fixture: ComponentFixture<WikispaceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikispaceCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WikispaceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
