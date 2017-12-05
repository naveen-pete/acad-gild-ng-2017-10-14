import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoggingService } from '../services/logging.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private MSG_LOGGED_IN = 'You have logged in!';
  private MSG_LOGGED_OUT = 'Please login!';
  loginMessage: string;

  constructor(
    private loggingService: LoggingService,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginMessage = this.authService.loggedIn
      ? this.MSG_LOGGED_IN
      : this.MSG_LOGGED_OUT;
  }

  ngOnInit() {}

  onGoToProducts() {
    this.loggingService.logMessage('Home - Go To Products button clicked.');
    this.router.navigate(['/products']);
  }

  onGoToCustomers() {
    this.loggingService.logMessage('Home - Go To Customers button clicked.');
    this.router.navigate(['/customers']);
  }

  onLogin() {
    this.loggingService.logMessage('Home - Login button clicked.');
    this.loginMessage = this.MSG_LOGGED_IN;
    this.authService.login();
  }

  onLogout() {
    this.loggingService.logMessage('Home - Logout button clicked.');
    this.loginMessage = this.MSG_LOGGED_OUT;
    this.authService.logout();
  }
}
