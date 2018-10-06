import { Component, OnInit, Injector } from '@angular/core';
import { BasicJsfComponent } from '../basic-jsf/basic-jsf.component';

@Component({
  selector: 'line-add-item',
  templateUrl: './line-add-item.component.html',
  styleUrls: ['./line-add-item.component.less']
})
export class LineAddItemComponent extends BasicJsfComponent implements OnInit {

  title: string;
  required: boolean;
  controlValue: any = [];

  constructor(
    private injector: Injector
  ) {
    super(injector);
  }

  ngOnInit() {
    super.ngOnInit();
    this.title = this.getConfig('title');
    this.required = this.getConfig('required');
  }

  addEvent() {
    this.controlValue.push('');
  }

  onItemChange(index, value) {
  }

  onFocusout(index, value) {
    this.controlValue[index] = value;
    if (value) {
      this.updateArrayList(this.controlValue.map((item) => {
        return {
          value: item,
          checked: !!item
        };
      }));
    }
  }

  deleteItem(index) {
    this.controlValue = this.controlValue.filter((item, itemIndex) => {
      return index !== itemIndex;
    });
    this.updateArrayList(this.controlValue.map((item) => {
      return {
        value: item,
        checked: !!item
      };
    }));
  }

}

