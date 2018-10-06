import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelChoiceComponent } from './panel-choice.component';

describe('PanelChoiceComponent', () => {
  let component: PanelChoiceComponent;
  let fixture: ComponentFixture<PanelChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
