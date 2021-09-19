import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePictureComponent } from './favorite-picture.component';

describe('FavoritePictureComponent', () => {
  let component: FavoritePictureComponent;
  let fixture: ComponentFixture<FavoritePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritePictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
