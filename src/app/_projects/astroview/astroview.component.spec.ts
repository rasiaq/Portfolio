import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroviewComponent } from './astroview.component';

describe('AstroviewComponent', () => {
  let component: AstroviewComponent;
  let fixture: ComponentFixture<AstroviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstroviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstroviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
