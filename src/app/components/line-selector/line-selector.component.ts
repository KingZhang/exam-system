import { Component, OnInit, Injector } from '@angular/core';
import { BasicJsfComponent } from '../basic-jsf/basic-jsf.component';

@Component({
  selector: 'line-selector',
  templateUrl: './line-selector.component.html',
  styleUrls: ['./line-selector.component.less']
})
export class LineSelectorComponent extends BasicJsfComponent implements OnInit {

  title: string;
  required: boolean;
  optionList: any = [];

  constructor(
    private injector: Injector
  ) {
    super(injector);
  }

  ngOnInit() {
    super.ngOnInit();
    this.title = this.getConfig('title');
    this.required = this.getConfig('required');
    this.optionList = this.getConfig('titleMap');
    if (this.inputStyle) {
      this.inputStyle = `width: ${this.inputStyle.width}`;
    }
  }

  onChange(data) {
    super.updateValue(data);
  }
}

