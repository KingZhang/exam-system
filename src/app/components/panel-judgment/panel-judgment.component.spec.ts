import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelJudgmentComponent } from './panel-judgment.component';

describe('PanelJudgmentComponent', () => {
  let component: PanelJudgmentComponent;
  let fixture: ComponentFixture<PanelJudgmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelJudgmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelJudgmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
