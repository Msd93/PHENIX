import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPhenixComponent } from './about-phenix.component';

describe('AboutPhenixComponent', () => {
  let component: AboutPhenixComponent;
  let fixture: ComponentFixture<AboutPhenixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPhenixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPhenixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
