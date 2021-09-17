import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollutantOZONEComponent } from './pollutant-ozone.component';

describe('PollutantOZONEComponent', () => {
  let component: PollutantOZONEComponent;
  let fixture: ComponentFixture<PollutantOZONEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollutantOZONEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollutantOZONEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
