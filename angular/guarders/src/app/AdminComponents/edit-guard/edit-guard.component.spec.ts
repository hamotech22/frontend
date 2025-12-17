import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGuardComponent } from './edit-guard.component';

describe('EditGuardComponent', () => {
  let component: EditGuardComponent;
  let fixture: ComponentFixture<EditGuardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditGuardComponent]
    });
    fixture = TestBed.createComponent(EditGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
