import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicJsfComponent } from './basic-jsf.component';

describe('BasicJsfComponent', () => {
  let component: BasicJsfComponent;
  let fixture: ComponentFixture<BasicJsfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicJsfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicJsfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
