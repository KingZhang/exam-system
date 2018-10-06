import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'panel-description',
  templateUrl: './panel-description.component.html',
  styleUrls: ['./panel-description.component.less'],
})
export class PanelDescriptionComponent implements OnInit, OnChanges {
  @Input() question: any;
  @Input() index: any;

  description: string;
  language: string;

  constructor() {
  }

  ngOnInit() {}

  ngOnChanges() {
    this.generateDesc();
  }

  getDesc() {
    return (this.index + 1) + '. ' + this.question.description;
  }

  generateDesc() {
    const { type, description } = this.question;
    this.description = (this.index + 1) + '. ' + description;
    switch (type) {
      case 'js':
        this.language = 'javascript';
        break;
      case 'html':
        this.language = 'html';
        break;
      case 'css':
        this.language = 'css';
        break;
      default:
        break;
    }
  }
}
