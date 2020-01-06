import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '@src/app/modules/+auth/services/login.service';
import {IAuthToken} from '@shared/models/interfaces/login/auth-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formModel: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
  }

  ngOnInit() {
    this.formModel = this.fb.group({
      'login': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  submit() {
    if(this.formModel.valid) {
      alert('form valid');
      const login = this.formModel.get('login').value;
      const password = this.formModel.get('password').value;
      this.loginService.tryLogin(login, password)
        .subscribe(
          (token: IAuthToken) => {

        }, (error) => {
          console.log(error);
        });
    } else {
      alert('bad form data');
    }
  }
}
