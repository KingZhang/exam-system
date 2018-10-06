import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NzNotificationService } from 'ng-zorro-antd';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private notification: NzNotificationService,
  ) {
    this.handleError = this.handleError.bind(this);
    this.deleteQuiz = this.deleteQuiz.bind(this);
    this.createQuiz = this.createQuiz.bind(this);
    this.modifyQuiz = this.modifyQuiz.bind(this);
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.showError();
    } else {
      this.showError();
    }
    return throwError(`后台请求错误。 ${error.error}`);
  }

  showSuccess(title?, message?) {
    this.notification.create('success', title || '操作成功', message || '');
  }

  showError(title?, message?) {
    this.notification.create('error', title || '操作失败', message || '');
  }

  /* 问题管理请求 */
  getQuestionList() {
    return this.http
      .get('http://localhost:3399/questions/questions')
      .pipe(catchError(this.handleError));
  }

  createQuestion(data) {
    this.createQuiz(data);
    return this.http
      .post('http://localhost:3399/questions/questions', data)
      .pipe(catchError(this.handleError));
  }

  deleteQuestion(id) {
    this.deleteQuiz(id);
    return this.http
      .delete(`http://localhost:3399/questions/questions/${id}`)
      .pipe(catchError(this.handleError));
  }

  modifyQuestion(id, data) {
    this.modifyQuiz(id, data);
    return this.http
      .patch(`http://localhost:3399/questions/questions/${id}`, data)
      .pipe(catchError(this.handleError));
  }

  /** 问题创建&获取请求（无答案） */
  getQuizList() {
    return this.http
      .get('http://localhost:3399/questions/quiz')
      .pipe(catchError(this.handleError));
  }

  deleteQuiz(id) {
    this.http
      .delete(`http://localhost:3399/questions/quiz/${id}`)
      .pipe(catchError(this.handleError))
      .subscribe();
  }

  createQuiz(data) {
    // 只保存问题信息
    data = _.clone(data);
    delete data.choiceAnswer;
    delete data.judgmentAnswer;
    delete data.textAnswer;
    delete data.programAnswer;
    delete data.point;
    this.http
      .post('http://localhost:3399/questions/quiz', data)
      .pipe(catchError(this.handleError))
      .subscribe();
  }

  modifyQuiz(id, data) {
    // 只保存问题信息
    data = _.clone(data);
    delete data.choiceAnswer;
    delete data.judgmentAnswer;
    delete data.textAnswer;
    delete data.programAnswer;
    delete data.point;
    this.http
      .patch(`http://localhost:3399/questions/quiz/${id}`, data)
      .pipe(catchError(this.handleError))
      .subscribe();
  }


  /* 申请问题管理请求 */
  getApplyList() {
    return this.http
      .get('http://localhost:3399/applyQuestions/questions')
      .pipe(catchError(this.handleError));
  }

  createApply(data) {
    return this.http
      .post('http://localhost:3399/applyQuestions/questions', data)
      .pipe(catchError(this.handleError));
  }

  deleteApply(id) {
    return this.http
      .delete(`http://localhost:3399/applyQuestions/questions/${id}`)
      .pipe(catchError(this.handleError));
  }

  modifyApply(id, data) {
    return this.http
      .patch(`http://localhost:3399/applyQuestions/questions/${id}`, data)
      .pipe(catchError(this.handleError));
  }

  /* 成绩管理请求 */
  getScoreList() {
    return this.http
      .get('http://localhost:3399/score/score')
      .pipe(catchError(this.handleError));
  }
  createScore(data) {
    return this.http
      .post('http://localhost:3399/score/score', data)
      .pipe(catchError(this.handleError));
  }
  deleteScore(id) {
    return this.http
      .delete(`http://localhost:3399/score/score/${id}`)
      .pipe(catchError(this.handleError));
  }
}
