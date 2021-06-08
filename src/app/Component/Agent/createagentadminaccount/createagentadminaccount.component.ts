import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Accounts } from 'src/app/Model/Accounts';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-createagentadminaccount',
  templateUrl: './createagentadminaccount.component.html',
  styleUrls: ['./createagentadminaccount.component.css'],
})
export class CreateagentadminaccountComponent implements OnInit {
  selectedOption: string;
  createForm: FormGroup;
  submitted: boolean = false;
  createdBy: string;
  userName: string;
  navigator: string;
  account : Accounts[];
  invalidUserName: boolean;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    if (localStorage.getItem('username') != null) {
      if (localStorage.getItem('rolecode') == '2') {
        this.navigator = 'agent';
        this.createdBy = localStorage.getItem('username') + '';
        this.userName = localStorage.getItem('username') + '';
      }
      if (localStorage.getItem('rolecode') == '3') {
        this.navigator = 'admin';
        this.createdBy = localStorage.getItem('username') + '';
        this.userName = localStorage.getItem('username') + '';
      }
    } else this.router.navigate(['/login']);

    console.log(localStorage.getItem('rolecode') + '');

    this.createForm = this.formBuilder.group({
      createdBy: this.createdBy,
      userName: ['', Validators.required],
      name: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      Bus_seg: ['', Validators.required],
      accountNumber: ['', Validators.required],
    });
  }
  onSubmit() {
    console.log(this.createForm.value);
    this.submitted = true;
    if (this.createForm.invalid) {
      return;
    }
  
    this.userService.getAccounts().subscribe((data) => {
      this.account = data;
      console.log(this.account);

      var JSON = this.account;
      console.log("json");
      
      var hasMatch = false;

      for (var index = 0; index < JSON.length; ++index) {
        var jsonData = JSON[index];

        if (this.createForm.controls.userName.value == jsonData.userName) {
          this.invalidUserName = true;
          hasMatch = false;
          break;
        } else {
          hasMatch = true;
        }
      }
      
      if (hasMatch == true) {
        this.userService.createAccount(this.createForm.value).subscribe((data) => {
          if (this.navigator == 'admin') {
            this.router.navigate(['login']);
          } else {
            this.router.navigate(['login']);
          }
        });
        alert('Account of ' +this.createForm.controls.userName.value +' created successfully');     
      }
      console.log(hasMatch);
    });
  }
}
