import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikispacePageComponent } from './wikispace-page.component';

describe('WikispacePageComponent', () => {
  let component: WikispacePageComponent;
  let fixture: ComponentFixture<WikispacePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikispacePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WikispacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
