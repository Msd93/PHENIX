import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalPhenixComponent } from './legal-phenix.component';

describe('LegalPhenixComponent', () => {
  let component: LegalPhenixComponent;
  let fixture: ComponentFixture<LegalPhenixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalPhenixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalPhenixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
