import { Component, OnInit, Injector } from '@angular/core';
import { BasicJsfComponent } from '../basic-jsf/basic-jsf.component';

@Component({
  selector: 'line-raido-group',
  templateUrl: './line-raido-group.component.html',
  styleUrls: ['./line-raido-group.component.less']
})
export class LineRaidoGroupComponent extends BasicJsfComponent implements OnInit {

  title: string;
  required: boolean;
  titleMap: any = [];

  constructor(
    private injector: Injector
  ) {
    super(injector);
  }

  ngOnInit() {
    super.ngOnInit();
    this.title = this.getConfig('title');
    this.required = this.getConfig('required');
    this.titleMap = this.getConfig('titleMap');
  }

}
