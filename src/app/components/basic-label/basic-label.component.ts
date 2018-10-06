import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'basic-label',
  templateUrl: './basic-label.component.html',
  styleUrls: ['./basic-label.component.less']
})
export class BasicLabelComponent implements OnInit {
  @Input() for: string;
  @Input() text: string;
  @Input() labelStyle: object;
  @Input() required: boolean;

  constructor() { }

  ngOnInit() {
  }

}
