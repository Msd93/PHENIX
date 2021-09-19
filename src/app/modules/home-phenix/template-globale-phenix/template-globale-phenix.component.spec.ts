import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateGlobalePhenixComponent } from './template-globale-phenix.component';

describe('TemplateGlobalePhenixComponent', () => {
  let component: TemplateGlobalePhenixComponent;
  let fixture: ComponentFixture<TemplateGlobalePhenixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateGlobalePhenixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateGlobalePhenixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
