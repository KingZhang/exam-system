import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'panel-program',
  templateUrl: './panel-program.component.html',
  styleUrls: ['./panel-program.component.less']
})
export class PanelProgramComponent implements OnInit {
  @Input() question: any;
  @Input() index: any;

  constructor() { }

  ngOnInit() {
  }

}
