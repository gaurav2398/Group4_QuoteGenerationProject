import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css'],
})
export class UserhomeComponent implements OnInit {
  createAccountShowComponent:boolean = false;
  navigation:string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  showCreateAccount() {
    this.createAccountShowComponent = true;
  }
  navigateAccont() {
    this.navigation = 'home';
    console.log(this.navigation);    
  }
  logout(event: Event) { 
    confirm('Are you sure want to logout ?');   
    if (localStorage.getItem('username') != null) {
      localStorage.removeItem('username');
      localStorage.removeItem('rolecode');
      this.router.navigate(['/login']);
    }
  } 
}
