import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPhenixComponent } from './contact-phenix.component';

describe('ContactPhenixComponent', () => {
  let component: ContactPhenixComponent;
  let fixture: ComponentFixture<ContactPhenixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPhenixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPhenixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
