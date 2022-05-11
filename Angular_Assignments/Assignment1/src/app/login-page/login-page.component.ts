import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../user-login';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginUserModel = new UserLogin('', '');
  submitted = false;
  constructor(private router:Router) {}
  onSubmit(form: any) {
    // console.log(form.valid);
    this.submitted = true;
    if (form.valid) {
      // this.users.push(this.userModel);
      if (
        this.loginUserModel.name === 'admin' &&
        this.loginUserModel.password === 'Admin@123'
      ) {
        this.router.navigate(['/main-view']);
        // alert('Matched');
      } else {
        alert('Please enter correct credentials.');
      }
    } else {
      alert('Please enter correct username and password.');
    }
    this.loginUserModel = new UserLogin("", "");
    this.submitted = false;
    form.resetForm();
  }
  ngOnInit(): void {}
}
