import { Component } from '@angular/core';
import { FormGroup,FormBuilder ,Validators} from '@angular/forms';

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
 
    if (this.registerForm.invalid) {
      return;
    }
    if (localStorage.getItem("users") === null) {
      this.users.push(this.registerForm.value);
      localStorage.setItem("users",JSON.stringify(this.users));
    }
    else {
      this.users = JSON.parse(localStorage.getItem('users') || ''); 
      this.users.push(this.registerForm.value);
      localStorage.setItem("users",JSON.stringify(this.users));
    }
    localStorage.setItem("users",JSON.stringify(this.users));
    // console.log(this.registerForm.value);
    this.submitted = false;
    this.registerForm.reset();

  }
  reset() {
    this.registerForm.reset();
  }
}
