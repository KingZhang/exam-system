import { Component, OnInit, Injector } from '@angular/core';
import { BasicJsfComponent } from '../basic-jsf/basic-jsf.component';

@Component({
  selector: 'line-rate',
  templateUrl: './line-rate.component.html',
  styleUrls: ['./line-rate.component.less']
})
export class LineRateComponent extends BasicJsfComponent implements OnInit {

  title: string;
  required: boolean;
  value: number;

  constructor(
    private injector: Injector
  ) {
    super(injector);
  }

  ngOnInit() {
    super.ngOnInit();
    this.title = this.getConfig('title');
    this.required = this.getConfig('required');
    if (this.controlValue) {
      this.value = parseInt(this.controlValue, 10);
    }
  }

}

