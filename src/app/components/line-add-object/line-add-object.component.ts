import { Component, OnInit, Injector } from '@angular/core';
import { BasicJsfComponent } from '../basic-jsf/basic-jsf.component';

@Component({
  selector: 'line-add-object',
  templateUrl: './line-add-object.component.html',
  styleUrls: ['./line-add-object.component.less']
})
export class LineAddObjectComponent extends BasicJsfComponent implements OnInit {

  title: string;
  required: boolean;
  controlValue: any = [];
  lineObject: any = [];

  constructor(
    private injector: Injector
  ) {
    super(injector);
  }

  ngOnInit() {
    super.ngOnInit();
    this.title = this.getConfig('title');
    this.required = this.getConfig('required');
    this.lineObject = this.controlValue;
  }

  addEvent() {
    this.lineObject.push({
      key: '',
      description: '',
    });
  }

  onItemChange(index, itemKey, itemValue) {
    const itemObject = this.lineObject[index];
    itemObject[itemKey] = itemValue;
    if (itemObject.key && itemObject.description) {
      this.updateArrayList(this.lineObject
        .filter((item) => {
          return item.key && item.description;
        })
        .map((item) => {
          const { key, description } = item;
          return {
            value: {
              key,
              description
            },
            checked: true
          };
        })
      );
    }
  }


  deleteItem(index) {
    this.lineObject = this.lineObject.filter((item, itemIndex) => {
      return index !== itemIndex;
    });
    this.updateArrayList(this.lineObject.map((item) => {
      return {
        value: {
          key: item.key,
          description: item.description
        },
        checked: true
      };
    }));
  }

}


