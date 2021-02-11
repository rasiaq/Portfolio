import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetalyzeComponent } from './netalyze.component';

describe('NetalyzeComponent', () => {
  let component: NetalyzeComponent;
  let fixture: ComponentFixture<NetalyzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetalyzeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
