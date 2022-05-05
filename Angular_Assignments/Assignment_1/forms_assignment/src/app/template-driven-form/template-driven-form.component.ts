import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  // model:form = new User();
  userModel = new User("","",0,null,null,"",3);
  
  users: User[] = [];
  onSubmit(form:any) {
    console.log(form.value);
    this.users.push(this.userModel);
    this.userModel = new User("","",0,null,null,"",3);
  }
  constructor() {  }

  ngOnInit(): void {
  }

}
