import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineAddItemComponent } from './line-add-item.component';

describe('LineAddItemComponent', () => {
  let component: LineAddItemComponent;
  let fixture: ComponentFixture<LineAddItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineAddItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
