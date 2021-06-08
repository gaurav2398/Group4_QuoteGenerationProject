import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout(event: Event) { 
    alert('Are you sure want to logout ?')
    if (localStorage.getItem('username') != null) {
      localStorage.removeItem('username');
      localStorage.removeItem('rolecode');
      this.router.navigate(['/login']);
    }
  } 
}
