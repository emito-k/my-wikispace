import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteSureComponent } from './dialog-delete-sure.component';

describe('DialogDeleteSureComponent', () => {
  let component: DialogDeleteSureComponent;
  let fixture: ComponentFixture<DialogDeleteSureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogDeleteSureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogDeleteSureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
