import { Component} from '@angular/core';
import { FormGroup,FormBuilder ,Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive-login-form',
  templateUrl: './reactive-login-form.component.html',
  styleUrls: ['./reactive-login-form.component.css']
})
export class ReactiveLoginFormComponent {
  loginForm!:FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  arr=[];
  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      name: ['',Validators.required],
      password: ['',Validators.required],
    });
  }
  onSubmit() {
    var isPresent = false;
    this.arr = JSON.parse(localStorage.getItem('users')||'');
    for (let index = 0; index < this.arr.length; index++) {
      const element = this.arr[index];
      // console.log((this.arr[index])['name']);
      if(((this.arr[index])['name'] === this.loginForm.value.name) && ((this.arr[index])['password'] === this.loginForm.value.password)) {
        isPresent = true;
        alert('Matched');
        this.loginForm.reset();
        return;
      }
    }
    if(!isPresent) {
      alert("Please Signup before login!");
    } 
    this.loginForm.reset();
    // console.log(this.arr);
  }
}
