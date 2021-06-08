import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-viewallprofile',
  templateUrl: './viewallprofile.component.html',
  styleUrls: ['./viewallprofile.component.css']
})
export class ViewallprofileComponent implements OnInit {

  userName:string;
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
    this.userService.getUsers().subscribe((data) => {
      this.users = data;    
    });
  }
  Search() {
    if(this.userName == "")
    {
      this.ngOnInit();
    }
    else
    {
      this.users = this.users.filter( res => {
        return res.userName.toLocaleLowerCase().match(this.userName.toLocaleLowerCase());
      })
    }
  }
}
