import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MianPageComponent } from './mian-page.component';

describe('MianPageComponent', () => {
  let component: MianPageComponent;
  let fixture: ComponentFixture<MianPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MianPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MianPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
