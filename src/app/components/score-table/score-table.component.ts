import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.less']
})
export class ScoreTableComponent implements OnInit, OnChanges {
  @Input() scoreList: any = [];
  @Input() operable: boolean;

  @Output() dataChange: EventEmitter<any> = new EventEmitter();

  displayData = null;
  sortName = null;
  sortValue = null;

  constructor(
    private apiService: ApiService,
  ) {
  }

  ngOnChanges() {
    this.displayData = this.scoreList;
  }

  ngOnInit() {
  }

  search(): void {
  }

  review() {}
  check() {}
  delete(id) {
    this.apiService.deleteScore(id).subscribe(() => {
      this.dataChange.emit();
    });
  }
}
