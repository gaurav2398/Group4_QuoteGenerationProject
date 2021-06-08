import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Accounts } from 'src/app/Model/Accounts';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-showaccount',
  templateUrl: './showaccount.component.html',
  styleUrls: ['./showaccount.component.css'],
})
export class ShowaccountComponent implements OnInit {
  createdBy: string;
  userName: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  Bus_seg: string;
  accountNumber: string;
  id: string;
  invalidAccountNumber:boolean;

  accounts: Accounts[];

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {} // Initialize with default list of users

  ngOnInit(): void {
    this.userService.getAccounts().subscribe((data) => {
      this.accounts = data;
      console.log(this.accounts);

      var JSON = this.accounts;
      var hasMatch = false;

      for (var index = 0; index < JSON.length; ++index) {
        var jsonData = JSON[index];
        
        if (localStorage.getItem('username') == jsonData.userName) {
          hasMatch = true;
          this.createdBy=jsonData.createdBy;
          this.userName=jsonData.userName;
          this.name=jsonData.name;
          this.street = jsonData.street;
          this.city = jsonData.city;
          this.state = jsonData.state;
          this.zip = jsonData.zip;
          this.Bus_seg = jsonData.Bus_seg;
          this.accountNumber = jsonData.accountNumber;
          this.id = jsonData.id;
          break;
        }
      }
      if(hasMatch == false)
      {        
         this.invalidAccountNumber= true;
      }
      console.log(hasMatch);
    });
  
  }
}
