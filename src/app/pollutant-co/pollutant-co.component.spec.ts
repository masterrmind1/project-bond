import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollutantCOComponent } from './pollutant-co.component';

describe('PollutantCOComponent', () => {
  let component: PollutantCOComponent;
  let fixture: ComponentFixture<PollutantCOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollutantCOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollutantCOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
