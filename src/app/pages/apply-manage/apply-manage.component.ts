import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'apply-manage',
  templateUrl: './apply-manage.component.html',
  styleUrls: ['./apply-manage.component.less']
})
export class ApplyManageComponent implements OnInit {
  questionList: any = [];
  filterList: any = [];
  search: string;
  showDetails: boolean;
  selectedId: number;

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
     this.getQuestionList();
    this.checkQuestion = this.checkQuestion.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  getQuestionList() {
    this.apiService.getApplyList().subscribe(data => {
      this.questionList = data;
      this.filterList = data;
    });
  }

  checkQuestion(id) {
    this.selectedId = id;
    this.showDetails = true;
  }

  hideDetails() {
    this.selectedId = null;
    this.showDetails = false;
  }

  onSearch() {
    this.filterList = this.questionList.filter((item) => {
      return !this.search || item.description.includes(this.search);
    });
  }

  passQuestion(id, data) {
    this.apiService.createQuestion(data).subscribe(response => {
      this.apiService.showSuccess();
      data.status = 'pass';
      this.apiService.modifyApply(id, data).subscribe(response2 => {
        this.getQuestionList();
      });
    });
  }

  rejectQuestion(id, data) {
    data.status = 'reject';
    this.apiService.modifyApply(id, data).subscribe(response2 => {
      this.getQuestionList();
      this.apiService.showSuccess();
    });
  }

  deleteQuestion(id) {
    this.apiService.deleteApply(id).subscribe(data => {
      this.getQuestionList();
      this.apiService.showSuccess();
    });
  }

}
