import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.less']
})
export class QuestionAnswerComponent implements OnInit, OnChanges {
  @Input() question;
  @Input() index;

  @Output() updateAnswer: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges() {
  }

  onAnswerChange(question) {
    this.updateAnswer.emit({
      index: this.index,
      question,
    });
  }

}
