import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelProgramComponent } from './panel-program.component';

describe('PanelProgramComponent', () => {
  let component: PanelProgramComponent;
  let fixture: ComponentFixture<PanelProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
