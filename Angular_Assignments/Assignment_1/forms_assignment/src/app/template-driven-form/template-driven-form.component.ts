import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent implements OnInit {
  userModel = new User('', '', '', null, null, '', '');
  // public isSubmitted = false;
  public isValid = false;
  users: User[] = [];
  onSubmit(form: any) {
    // console.log(form);
    if (form.valid) {
      this.users.push(this.userModel);
      this.userModel = new User('', '', '', null, null, '', '');
      form.reset();
    } else {
      alert('Please fill the form correctly');
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
