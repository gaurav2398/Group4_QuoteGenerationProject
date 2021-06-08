import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenthome',
  templateUrl: './agenthome.component.html',
  styleUrls: ['./agenthome.component.css']
})
export class AgenthomeComponent implements OnInit {

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
