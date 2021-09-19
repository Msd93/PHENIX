import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellPhenixComponent } from './sell-phenix.component';

describe('SellPhenixComponent', () => {
  let component: SellPhenixComponent;
  let fixture: ComponentFixture<SellPhenixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellPhenixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellPhenixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
