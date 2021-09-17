import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollutantSO2Component } from './pollutant-so2.component';

describe('PollutantSO2Component', () => {
  let component: PollutantSO2Component;
  let fixture: ComponentFixture<PollutantSO2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollutantSO2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollutantSO2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
