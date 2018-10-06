import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsManageComponent } from './questions-manage.component';

describe('QuestionsManageComponent', () => {
  let component: QuestionsManageComponent;
  let fixture: ComponentFixture<QuestionsManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
