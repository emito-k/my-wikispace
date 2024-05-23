import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateWikispaceFormComponent } from './dialog-update-wikispace-form.component';

describe('DialogUpdateWikispaceFormComponent', () => {
  let component: DialogUpdateWikispaceFormComponent;
  let fixture: ComponentFixture<DialogUpdateWikispaceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogUpdateWikispaceFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogUpdateWikispaceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
