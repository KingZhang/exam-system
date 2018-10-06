import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndlessModeComponent } from './endless-mode.component';

describe('EndlessModeComponent', () => {
  let component: EndlessModeComponent;
  let fixture: ComponentFixture<EndlessModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndlessModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndlessModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
