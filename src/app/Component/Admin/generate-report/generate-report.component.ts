import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questions } from 'src/app/Model/Questions';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {

  accounts: Questions[];
  userName:string;

  constructor(private router: Router, private userService: UserService) {} 

  ngOnInit() {
    if (localStorage.getItem('username') != null) {
      this.userService.getPolicy().subscribe((data) => {
        this.accounts = data;
       
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
      this.accounts = this.accounts.filter( res => {
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
