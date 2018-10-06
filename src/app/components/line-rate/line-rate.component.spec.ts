import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineRateComponent } from './line-rate.component';

describe('LineRateComponent', () => {
  let component: LineRateComponent;
  let fixture: ComponentFixture<LineRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
