import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgModel, Validators} from '@angular/forms';
import {LoginService} from '@src/app/modules/+auth/services/login.service';
import {IAuthToken} from '@shared/models/interfaces/login/auth-token';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formModel: FormGroup;
  @ViewChild('loginForm') loginForm: NgModel; // for async check

  constructor(
    private fb: FormBuilder,
    private router: Router,
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
      // alert('form valid');
      const login = this.formModel.get('login').value;
      const password = this.formModel.get('password').value;
      this.loginService.tryLogin(login, password)
        .subscribe(
          (token: IAuthToken) => {
            if (token) {
              console.log('token', token);
              this.saveToken(token);
              this.router.navigate(['main']);

            } else {
              // display fail login to user
              console.log('no token obtained, login fail');
              this.formModel.controls.login.setErrors({'fuckup': true});
              this.formModel.controls.password.setErrors({'fuckup': true});
            }
        }, (error) => {
          console.log(error);
        });
    } else {
      alert('bad form data');
    }
  }

  private saveToken(token: IAuthToken) {

  }
}
