import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionPhenixComponent } from './inscription-phenix.component';

describe('InscriptionPhenixComponent', () => {
  let component: InscriptionPhenixComponent;
  let fixture: ComponentFixture<InscriptionPhenixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionPhenixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionPhenixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
