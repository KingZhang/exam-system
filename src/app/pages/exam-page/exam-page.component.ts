import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import schema from '../../schemas/exam-schema';
import { ApiService } from '../../services/api/api.service';
import { SessionService } from '../../services/session/session.service';
import * as utils from '../../utils/utils';
import * as _ from 'lodash';

@Component({
  selector: 'exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.less']
})
export class ExamPageComponent implements OnInit {
  examSchema: any;
  status: String = 'ready';
  showExam: boolean;
  questionList: any = [];
  examQuestion: any = [];
  fullList: any = [];
  currentIndex: number;
  timer: any;
  timerStr: any;
  counter: any;
  examData: any = {};


  constructor(
    private apiService: ApiService,
    private session: SessionService,
    private modalService: NzModalService,
  ) { }

  ngOnInit() {
    this.currentIndex = 0;
    this.examSchema = schema;
    this.examSchema.data = {};
    this.apiService.getQuizList().subscribe(data => {
      this.questionList = data;
    });
    this.apiService.getQuestionList().subscribe(data => {
      this.fullList = data;
    });
  }

  startExam(data) {
    const { subject, degree } = data;
    this.examData = data;
    if (subject && degree) {
      this.examQuestion = utils.getRandoQuestion(this.questionList, subject, degree);
      if (this.examQuestion.length) {
        const collapseIcon: HTMLElement  = document.querySelectorAll(('.ant-layout-sider-trigger .anticon-left'))[0] as HTMLElement ;
        collapseIcon && collapseIcon.click();
        this.status = 'started';
        // 对问题按类型排序
        this.sortQuestion();
        // 初始化考试时间
        this.timer = 5400;
        this.timerStr = this.getTimerStr(this.timer);
        this.startTimer();
      } else {
        this.apiService.showError('题库不足，无法考试，请选择其他类型或级别。');
      }

      // TODO TBD
      // this.examQuestion = this.questionList;
      // this.isStart = true;
      // const collapseIcon: HTMLElement  = document.querySelectorAll(('.ant-layout-sider-trigger .anticon-left'))[0] as HTMLElement ;
      // collapseIcon && collapseIcon.click();
      // this.sortQuestion();
    }

  }

  sortQuestion() {
    const sortIndex = ['judgment', 'single', 'multiple', 'answer', 'program'];
    this.examQuestion.sort((a, b) => {
      return sortIndex.indexOf(a.type) > sortIndex.indexOf(b.type) ? 1 : -1;
    });
    // disorder answer items
    this.examQuestion.forEach((item) => {
      if (item.answerItems) {
        item.answerItems.sort(() => (0.5 - Math.random()));
      }
    });
  }

  cancel() {
    this.examQuestion = [];
    this.status = 'ready';
    const collapseIcon: HTMLElement  = document.querySelectorAll(('.ant-layout-sider-trigger .anticon-right'))[0] as HTMLElement ;
    collapseIcon && collapseIcon.click();
    // reset timer
    clearInterval(this.counter);
  }

  selectQuestion(index) {
    this.currentIndex = index;
  }

  preQuestion() {
    this.currentIndex = this.currentIndex - 1;
  }

  nextQuestion() {
    this.currentIndex = this.currentIndex + 1;
  }

  updateAnswer(answer) {
    const { index, question } = answer;
    this.examQuestion[index] = question;
  }

  checkConfirm() {
    let completed = true;

    this.examQuestion.forEach((item) => {
      if (!item.choiceAnswer && !item.judgmentAnswer && !item.textAnswer && !item.programAnswer) {
        completed = false;
      }
    });

    if (completed) {
      this.submit();
    } else {
      this.modalService.confirm({
        nzTitle: '<i>有部分问题未作答，是否确认交卷?</i>',
        nzOnOk: this.submit.bind(this)
      });
    }
  }

  submit() {
    // reset timer
    clearInterval(this.counter);
    this.status = 'completed';
    // count score
    const score = utils.getScore(this.examData, this.examQuestion, this.fullList);
    // submit to server
    this.apiService.createScore({
      username: this.session.getUsername(),
      subject: this.examData.subject,
      degree: this.examData.degree,
      date: (new Date()).toLocaleString(),
      consume: this.getTimerStr(5400 - this.timer),
      questions: this.examQuestion.map((item) => {
        const cloneItem = _.cloneDeep(item);
        delete cloneItem.degree;
        delete cloneItem.description;
        delete cloneItem.subject;
        delete cloneItem.type;
        delete cloneItem.user;
        delete cloneItem.answerItems;
        return cloneItem;
      }),
      score,
    }).subscribe();
  }

  getTimerStr(timer) {
    const minutes = Math.floor(timer / 60);
    let seconds = (timer % 60).toString();
    if (seconds.length === 1) {
      seconds = '0' + seconds;
    }
    return `${minutes} : ${seconds}`;
  }

  startTimer() {
    clearInterval(this.counter);
    this.counter = setInterval(() => {
      this.timer--;
      this.timerStr = this.getTimerStr(this.timer);
      if (this.timer <= 0) {
        clearInterval(this.counter);
        this.submit();
      }
    }, 1000);
  }

}
