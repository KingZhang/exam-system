import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import projectConfig from '../../config/projectConfig';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  username: '';

  constructor(
    private router: Router,
  ) {
  }

  setUserName(username) {
    this.username = username;
  }

  getUsername() {
    return this.username;
  }

  isAdmin() {
    const { admin } = projectConfig;
    return admin === this.username;
  }
}
