import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'panel-judgment',
  templateUrl: './panel-judgment.component.html',
  styleUrls: ['./panel-judgment.component.less']
})
export class PanelJudgmentComponent implements OnInit, OnChanges {
  @Input() question: any;
  @Input() index: any;

  @Output() answerChange: EventEmitter<any> = new EventEmitter();

  value: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.value = this.question.judgmentAnswer;
  }

  onValueChange(value) {
    this.question.judgmentAnswer = value;
    this.answerChange.emit(this.question);
  }

}
