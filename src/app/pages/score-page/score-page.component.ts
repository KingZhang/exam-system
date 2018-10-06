import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { SessionService } from '../../services/session/session.service';

@Component({
  selector: 'score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.less']
})
export class ScorePageComponent implements OnInit {
  scoreList: any = [];

  constructor(
    private apiService: ApiService,
    private session: SessionService,
  ) { }

  ngOnInit() {
    const username = this.session.getUsername();
    this.apiService.getScoreList().subscribe((data: Array<object>) => {
      this.scoreList = data.filter((item: any) => {
        return item.username === username;
      });
    });
  }

}
