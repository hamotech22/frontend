import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignNavbarComponent } from './sign-navbar.component';

describe('SignNavbarComponent', () => {
  let component: SignNavbarComponent;
  let fixture: ComponentFixture<SignNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignNavbarComponent]
    });
    fixture = TestBed.createComponent(SignNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
