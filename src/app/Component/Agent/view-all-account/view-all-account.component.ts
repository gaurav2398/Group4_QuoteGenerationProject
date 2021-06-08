import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accounts } from 'src/app/Model/Accounts';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-view-all-account',
  templateUrl: './view-all-account.component.html',
  styleUrls: ['./view-all-account.component.css'],
})
export class ViewAllAccountComponent implements OnInit {
  accounts: Accounts[];
  sortedAccounts: Accounts[] = [];
  userName:string;

  constructor(private router: Router, private userService: UserService) {} // Initialize with default list of users

  ngOnInit() {
    if (localStorage.getItem('username') != null) {
      this.userService.getAccounts().subscribe((data) => {
        this.accounts = data;
        if (localStorage.getItem('rolecode') == '2') {
          for (var index = 0; index < this.accounts.length; ++index) {
            var jsonData = this.accounts[index];

            if (jsonData.createdBy == localStorage.getItem('username')) {
              console.log(localStorage.getItem('username'));
              console.log(this.accounts[index]);

              this.sortedAccounts.push(this.accounts[index]);
            }
          }
        }
        if (localStorage.getItem('rolecode') == '3') {
          this.sortedAccounts = data;
        }

        console.log(this.sortedAccounts);
      });
    } else this.router.navigate(['/login']);
  }
  Search() {
    if(this.userName == "")
    {
      this.ngOnInit();
    }
    else
    {
      this.sortedAccounts = this.sortedAccounts.filter( res => {
        return res.userName.toLocaleLowerCase().match(this.userName.toLocaleLowerCase());
      })
    }
  }
  key:string = 'userName';
  reverse:boolean = false;
  sort(key: string)
  {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
