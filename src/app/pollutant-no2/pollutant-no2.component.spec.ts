import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollutantNO2Component } from './pollutant-no2.component';

describe('PollutantNO2Component', () => {
  let component: PollutantNO2Component;
  let fixture: ComponentFixture<PollutantNO2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollutantNO2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollutantNO2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
