import { Component, OnInit, Input, Output, EventEmitter, ContentChild, ViewChild } from '@angular/core';
import schema from '../../schemas/question-schema';
import { BasicFormComponent } from '../basic-form/basic-form.component';

@Component({
  selector: 'question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.less']
})
export class QuestionEditorComponent implements OnInit {
  @Input() questionList: any = [];
  @Input() selectedId: string;
  @Input() showStatus: boolean;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onCancel = new EventEmitter();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSubmit = new EventEmitter();

  @ContentChild('actionFooter') actionFooter;
  @ViewChild(BasicFormComponent) basicForm: BasicFormComponent;

  questionSchema: any;

  constructor() { }

  ngOnInit() {
    this.questionSchema = schema;
    this.questionSchema.data = this.questionList.find(item => item.id === this.selectedId);
  }

  cancelEvent() {
    this.onCancel.emit();
  }

  submitEvent(data) {
    this.onSubmit.emit(data);
  }

  submit() {
    this.basicForm.submit();
  }

  getRejectFormat(status) {
    return '已废弃';
  }

  getPassFormat(status) {
    return '已通过';
  }

}
