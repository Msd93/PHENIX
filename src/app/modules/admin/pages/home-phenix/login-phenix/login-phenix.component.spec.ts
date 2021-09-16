import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPhenixComponent } from './login-phenix.component';

describe('LoginPhenixComponent', () => {
  let component: LoginPhenixComponent;
  let fixture: ComponentFixture<LoginPhenixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPhenixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPhenixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
