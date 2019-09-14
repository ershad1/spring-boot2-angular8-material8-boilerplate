import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {AuthService} from '../../../security/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [':host { height: 100%; margin: 0 15px !important; justify-content: center; align-items: center; }']

})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    public snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
  }

  login(event, username, password) {
    this.authService
    .signIn(username, password)
    .subscribe(
      data => {
        this.router.navigate(['/']);
        this.snackBar.open('Session started', 'Login', {
          duration: 2000,
          horizontalPosition: 'right'
        });
      },
      err => {
        if (err.status === 401) {
          this.snackBar.open('Incorrect password', 'Login', {
            duration: 2000,
            horizontalPosition: 'right'
          });
        } else if (err.status === 404) {
          this.snackBar.open('Username does not exist', 'Login', {
            duration: 2000,
            horizontalPosition: 'right'
          });
        }
      }
    );
  }

}
