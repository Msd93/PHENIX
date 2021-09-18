import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePhenixComponent } from './home-phenix.component';

describe('HomePhenixComponent', () => {
  let component: HomePhenixComponent;
  let fixture: ComponentFixture<HomePhenixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePhenixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePhenixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
