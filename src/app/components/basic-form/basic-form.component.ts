import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../services/session/session.service';

@Component({
  selector: 'basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.less']
})
export class BasicFormComponent implements OnInit {
  @Input() formSchema: any;
  @Input() isUserRequire: boolean;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSubmit = new EventEmitter();

  formData: any;
  id: number;

  jsonFormOptions: any = {
    addSubmit: false, // Add a submit button if layout does not have one
    debug: false, // Don't show inline debugging information
    loadExternalAssets: true, // Load external css and JavaScript for frameworks
    returnEmptyFields: false, // Don't return values for empty input fields
    setSchemaDefaults: true, // Always use schema defaults for empty fields
    defautWidgetOptions: { feedback: true }, // Show inline feedback icons
  };

  constructor(
    private http: HttpClient,
    private session: SessionService,
  ) { }

  ngOnInit() {
    this.formData = this.formSchema.data || {};
    this.id = this.formData.id;
  }

  onChanges(data) {
    this.formData = data;
  }

  onSubmitEvent(data) {
  }

  submit() {
    // add user
    if (this.isUserRequire) {
      this.formData.user = this.session.getUsername();
    }
    // add id
    if (this.id !== undefined) {
      this.formData.id = this.id;
    }
    this.onSubmit.emit(this.formData);
  }

}
