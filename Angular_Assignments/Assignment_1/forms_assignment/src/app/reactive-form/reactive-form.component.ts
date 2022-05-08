import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder ,Validators} from '@angular/forms';

// interface User {
//   name: string;
//   nickname: string;
//   email: string;
//   password: string;
//   showPassword: boolean;
// }
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  // emailValidation: boolean = true;
  registerForm!: FormGroup;
  submitted = false;
  users: FormGroup[] = [];
  constructor(private formBuilder: FormBuilder) {}
 
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      fathersname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobilenumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]  
    });
  }
 
  onSubmit() {
    this.submitted = true;
 
    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.users.push(this.registerForm.value);
    // console.log(this.registerForm.value);
    this.submitted = false;
    this.registerForm.reset();

  }
  reset() {
    this.registerForm.reset();
  }
}
