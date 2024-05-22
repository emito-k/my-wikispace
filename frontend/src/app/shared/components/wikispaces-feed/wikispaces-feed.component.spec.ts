import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikispacesFeedComponent } from './wikispaces-feed.component';

describe('WikispacesFeedComponent', () => {
  let component: WikispacesFeedComponent;
  let fixture: ComponentFixture<WikispacesFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikispacesFeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WikispacesFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
