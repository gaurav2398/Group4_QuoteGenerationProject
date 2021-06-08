import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questions } from 'src/app/Model/Questions';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-viewallpolicy',
  templateUrl: './viewallpolicy.component.html',
  styleUrls: ['./viewallpolicy.component.css']
})
export class ViewallpolicyComponent implements OnInit {

  accounts: Questions[];
  sortedAccounts: Questions[] = [];
  userName:string;

  constructor(private router: Router, private userService: UserService) {} // Initialize with default list of users

  ngOnInit() {
    if (localStorage.getItem('username') != null) {
      this.userService.getPolicy().subscribe((data) => {
        this.accounts = data;
        if (localStorage.getItem('rolecode') == '1' ) {
          for (var index = 0; index < this.accounts.length; ++index) {
            var jsonData = this.accounts[index];

            if (jsonData.userName == localStorage.getItem('username')) {
              console.log(localStorage.getItem('username'));
              console.log(this.accounts[index]);

              this.sortedAccounts.push(this.accounts[index]);
            }
          }
        }
        if (localStorage.getItem('rolecode') == '2' ) {
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
      });
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
