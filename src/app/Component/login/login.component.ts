import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users: User[];

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidUserNameLogin: boolean = false;
  invalidPasswordLogin: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    if (localStorage.getItem('username') != null) {
      if (localStorage.getItem('rolecode') == '1') {
        this.router.navigate(['/user-home']);
      }
      if (localStorage.getItem('rolecode') == '2') {
        this.router.navigate(['/agent-home']);
      }
      if (localStorage.getItem('rolecode') == '3') {
        this.router.navigate(['/admin-home']);
      }
    }
  }
  onSubmit() {
    this.invalidUserNameLogin = false;
    this.invalidPasswordLogin = false;
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
  
      var JSON = this.users;
      var hasMatchUserName = false;
      var hasMatchPassword = false;

      for (var index = 0; index < JSON.length; ++index) {
        var jsonData = JSON[index];

        if (jsonData.userName == this.loginForm.controls.username.value) {
          hasMatchUserName = true;
          if (jsonData.password == this.loginForm.controls.password.value) {
            hasMatchPassword = true;
            localStorage.setItem('username',this.loginForm.controls.username.value);

            //1 user login
            if (jsonData.roleCode == '1') {
              localStorage.setItem('rolecode', '1');
              this.router.navigate(['user-home']);
            }
            //2 agent login
            if (jsonData.roleCode == '2') {
              localStorage.setItem('rolecode', '2');
              this.router.navigate(['agent-home']);
            }
            //3 admin login
            if (jsonData.roleCode == '3') {
              localStorage.setItem('rolecode', '3');
              this.router.navigate(['admin-home']);
            }
            break;
          }
        }
      }
      if (hasMatchUserName == false) {
        this.invalidUserNameLogin = true;
      }
      if (hasMatchPassword == false) {
        this.invalidPasswordLogin = true;
      }
    });
  } 
}
