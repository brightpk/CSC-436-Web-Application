import { UserLogin } from './../models/userlogin.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth-userlogin/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userLogin: UserLogin;
  message: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.userLogin = new UserLogin();
    this.message = '';
    // this.loginForm.valueChanges.subscribe(console.log);
  }

  login() {
    this.userLogin.username = this.loginForm.value.username;
    this.userLogin.password = this.loginForm.value.password;
    if (this.authService.login(this.userLogin)) {
      this.router.navigate(['/chatpage']);
    } else {
      this.message = 'Incorrect username and password';
      // return false;
    }
  }

  logout() {
    this.authService.logout();
  }

}
