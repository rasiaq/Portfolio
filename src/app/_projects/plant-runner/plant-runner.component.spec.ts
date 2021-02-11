import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantRunnerComponent } from './plant-runner.component';

describe('PlantRunnerComponent', () => {
  let component: PlantRunnerComponent;
  let fixture: ComponentFixture<PlantRunnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantRunnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
