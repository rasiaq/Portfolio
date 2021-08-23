import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayleanComponent } from './staylean.component';

describe('StayleanComponent', () => {
  let component: StayleanComponent;
  let fixture: ComponentFixture<StayleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StayleanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StayleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
