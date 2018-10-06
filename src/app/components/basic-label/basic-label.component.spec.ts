import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLabelComponent } from './basic-label.component';

describe('BasicLabelComponent', () => {
  let component: BasicLabelComponent;
  let fixture: ComponentFixture<BasicLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
