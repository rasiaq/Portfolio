import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawFirmWebsiteComponent } from './law-firm-website.component';

describe('LawFirmWebsiteComponent', () => {
  let component: LawFirmWebsiteComponent;
  let fixture: ComponentFixture<LawFirmWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawFirmWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawFirmWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
