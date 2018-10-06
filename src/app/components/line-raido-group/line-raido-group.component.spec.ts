import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineRaidoGroupComponent } from './line-raido-group.component';

describe('LineRaidoGroupComponent', () => {
  let component: LineRaidoGroupComponent;
  let fixture: ComponentFixture<LineRaidoGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineRaidoGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineRaidoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
