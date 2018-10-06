import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'question-table',
  templateUrl: './question-table.component.html',
  styleUrls: ['./question-table.component.less'],
})
export class QuestionTableComponent implements OnInit, OnChanges {
  @Input()
  questionList: any = [];
  @Input()
  checkQuestion: Function;
  @Input()
  deleteQuestion: Function;
  @Input()
  showStatus: boolean;

  displayData = null;
  sortName = null;
  sortValue = null;

  constructor() {
  }

  ngOnChanges() {
    this.displayData = this.questionList.sort((before, after) => {
      // 排序规则：未通过-通过-废弃 || ID递减
      if (this.showStatus) {
        const { status: statusA } = before;
        const { status: statusB } = after;
        if (!statusA && statusB) {
          return -1;
        } else if (statusA && !statusB) {
          return 1;
        } else if (statusA !== statusB) {
          return statusA > statusB ? 1 : -1;
        }
      }
      return after.id > before.id ? 1 : -1;
    });
  }

  ngOnInit() {
  }

  getStatus(status) {
    switch (status) {
      case 'pass':
        return '通过';
      case 'reject':
        return '废弃';
      default:
        return '未检入';
    }
  }

  sortTable(sort: { key: string; value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  search(): void {
    /** sort data **/
    if (this.sortName) {
      this.displayData = this.questionList.sort(
        (a, b) =>
          this.sortValue === 'ascend'
            ? a[this.sortName] > b[this.sortName]
              ? 1
              : -1
            : b[this.sortName] > a[this.sortName]
              ? 1
              : -1,
      );
    } else {
      this.displayData = this.questionList;
    }
  }
}
