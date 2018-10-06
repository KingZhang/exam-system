import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session/session.service';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';
import projectConfig from '../../config/projectConfig';

@Component({
  selector: 'system-login',
  templateUrl: './system-login.component.html',
  styleUrls: ['./system-login.component.less']
})
export class SystemLoginComponent implements OnInit {

  labelStyle: object = {width: '20%', display: 'inline-block'};
  inputStyle: any = {width: '80%'};
  username: '';

  constructor(
    private session: SessionService,
    private apiService: ApiService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onEnter() {
    this.login();
  }

  login() {
    if (this.username && this.validUser()) {
      this.session.setUserName(this.username);
      this.router.navigateByUrl(`/main/${this.username}`);
    }
  }

  validUser() {
    let isValid = false;
    const { admin, usernameRegex } = projectConfig;
    const reg = new RegExp(usernameRegex);
    if (this.username === admin || reg.test(this.username)) {
      isValid = true;
    } else {
      this.apiService.showError('用户名错误，请重新输入。');
    }
    return isValid;
  }

}
