import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkrateComponent } from './workrate.component';

describe('WorkrateComponent', () => {
  let component: WorkrateComponent;
  let fixture: ComponentFixture<WorkrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
