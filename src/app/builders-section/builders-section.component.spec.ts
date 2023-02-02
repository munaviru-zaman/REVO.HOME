import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildersSectionComponent } from './builders-section.component';

describe('BuildersSectionComponent', () => {
  let component: BuildersSectionComponent;
  let fixture: ComponentFixture<BuildersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildersSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
