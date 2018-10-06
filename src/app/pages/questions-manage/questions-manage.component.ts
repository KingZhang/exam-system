import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'questions-manage',
  templateUrl: './questions-manage.component.html',
  styleUrls: ['./questions-manage.component.less']
})
export class QuestionsManageComponent implements OnInit {

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
    this.apiService.getQuestionList().subscribe(data => {
      this.questionList = data;
      this.filterList = data;
    });
  }

  deleteQuestion(id) {
    this.apiService.deleteQuestion(id).subscribe((data: any) => {
      this.getQuestionList();
      this.apiService.showSuccess();
      // 更新申请库的数据
      this.apiService.modifyApply(id, { status: null }).subscribe();
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

  updateQuestion(id, data) {
    this.apiService.modifyQuestion(id, data).subscribe(response => {
      this.apiService.showSuccess();
      this.getQuestionList();
    });
  }

}
