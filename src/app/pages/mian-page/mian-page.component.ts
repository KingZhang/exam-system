import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session/session.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mian-page',
  templateUrl: './mian-page.component.html',
  styleUrls: ['./mian-page.component.less']
})
export class MianPageComponent implements OnInit {
  username: '';
  selectMenu: any;
  isAdmin: boolean;

  isCollapsed: boolean;
  constructor(
    private session: SessionService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    // this.username = this.session.getUsername();
    this.activatedRoute.params.subscribe((params) => {
      this.username = params.username;
      this.session.setUserName(this.username);
      this.selectMenu = this.router.url.split('/') .pop();
      this.isAdmin = this.session.isAdmin();
    });
  }

  logout() {
    this.session.setUserName('');
    this.router.navigateByUrl('/login');
  }

}
