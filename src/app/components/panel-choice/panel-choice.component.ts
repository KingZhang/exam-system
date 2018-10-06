import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'panel-choice',
  templateUrl: './panel-choice.component.html',
  styleUrls: ['./panel-choice.component.less']
})
export class PanelChoiceComponent implements OnInit, OnChanges {
  @Input() question: any;
  @Input() index: any;

  @Output() answerChange: EventEmitter<any> = new EventEmitter();

  value: any;
  answerOptions: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    const { type, answerItems, choiceAnswer = [] } = this.question;
    if (type === 'multiple') {
      // set multiple choice answer
      this.value = choiceAnswer || [];
      // generate answer options
      this.answerOptions = [];
      answerItems.forEach((item) => {
        this.answerOptions.push({
          label: item.description,
          value: item.key,
          checked: this.value.includes(item.key),
        });
      });
    } else {
      // set single choice answer
      this.value = choiceAnswer[0];
    }
  }

  onSingleChange(value) {
    this.question.choiceAnswer = [value];
    this.answerChange.emit(this.question);
  }

  onMultipleChange(list) {
    this.question.choiceAnswer = [];
    list.forEach((item) => {
      if (item.checked) {
        this.question.choiceAnswer.push(item.value);
      }
    });
    this.answerChange.emit(this.question);
  }

}
