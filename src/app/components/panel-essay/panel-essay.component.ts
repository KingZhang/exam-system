import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'panel-essay',
  templateUrl: './panel-essay.component.html',
  styleUrls: ['./panel-essay.component.less']
})
export class PanelEssayComponent implements OnInit {
  @Input() question: any;
  @Input() index: any;

  constructor() { }

  ngOnInit() {
  }

}
