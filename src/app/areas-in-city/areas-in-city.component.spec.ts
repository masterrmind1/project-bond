import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasInCityComponent } from './areas-in-city.component';

describe('AreasInCityComponent', () => {
  let component: AreasInCityComponent;
  let fixture: ComponentFixture<AreasInCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasInCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasInCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
