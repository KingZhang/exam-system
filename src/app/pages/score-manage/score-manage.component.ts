import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'score-manage',
  templateUrl: './score-manage.component.html',
  styleUrls: ['./score-manage.component.less']
})
export class ScoreManageComponent implements OnInit {

  scoreList: any = [];

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.getScoreList();
  }

  getScoreList() {
    this.apiService.getScoreList().subscribe((data: Array<object>) => {
      this.scoreList = data;
    });
  }

}
