import { Component, OnInit, Input, Injector } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { JsonSchemaFormService } from 'angular6-json-schema-form';

@Component({
  selector: 'basic-jsf',
  templateUrl: './basic-jsf.component.html',
  styleUrls: ['./basic-jsf.component.less']
})
export class BasicJsfComponent implements OnInit {
  formControl: AbstractControl;
  controlName: string;
  controlValue: string;
  private options: any;
  @Input() layoutNode: any;
  @Input() labelStyle: object = {width: '15%', display: 'inline-block'};
  @Input() inputStyle: any = {width: '70%'};

  public jsf: JsonSchemaFormService;
  constructor(
    private baseInjector: Injector
  ) {
    this.jsf = this.baseInjector.get(JsonSchemaFormService);
  }

  ngOnInit() {
    this.options = this.layoutNode.options || {};
    this.jsf.initializeControl(this);
  }

  getConfig(key) {
    return this.options[key];
  }

  updateValue(value) {
    this.jsf.updateValue(this, value);
  }

  updateArrayList(value) {
    this.jsf.updateArrayCheckboxList(this, value);
  }

}
