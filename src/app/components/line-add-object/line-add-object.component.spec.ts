import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineAddObjectComponent } from './line-add-object.component';

describe('LineAddObjectComponent', () => {
  let component: LineAddObjectComponent;
  let fixture: ComponentFixture<LineAddObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineAddObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineAddObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
