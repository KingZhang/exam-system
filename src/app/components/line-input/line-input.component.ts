import { Component, OnInit, Injector } from '@angular/core';
import { BasicJsfComponent } from '../basic-jsf/basic-jsf.component';

@Component({
  selector: 'line-input',
  templateUrl: './line-input.component.html',
  styleUrls: ['./line-input.component.less']
})
export class LineInputComponent extends BasicJsfComponent implements OnInit {

  title: string;
  required: boolean;
  isTextarea: boolean;

  constructor(
    private injector: Injector
  ) {
    super(injector);
  }

  ngOnInit() {
    super.ngOnInit();
    this.title = this.getConfig('title');
    this.required = this.getConfig('required');
    this.isTextarea = this.getConfig('isTextarea');
  }

}
