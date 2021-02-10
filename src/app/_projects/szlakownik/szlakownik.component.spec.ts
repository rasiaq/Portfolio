import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzlakownikComponent } from './szlakownik.component';

describe('SzlakownikComponent', () => {
  let component: SzlakownikComponent;
  let fixture: ComponentFixture<SzlakownikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzlakownikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SzlakownikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
