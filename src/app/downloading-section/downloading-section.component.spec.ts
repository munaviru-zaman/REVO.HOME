import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadingSectionComponent } from './downloading-section.component';

describe('DownloadingSectionComponent', () => {
  let component: DownloadingSectionComponent;
  let fixture: ComponentFixture<DownloadingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadingSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
