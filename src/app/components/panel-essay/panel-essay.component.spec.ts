import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelEssayComponent } from './panel-essay.component';

describe('PanelEssayComponent', () => {
  let component: PanelEssayComponent;
  let fixture: ComponentFixture<PanelEssayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelEssayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelEssayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
