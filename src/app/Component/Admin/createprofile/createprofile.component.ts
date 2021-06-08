import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.css'],
})
export class CreateprofileComponent implements OnInit {
  invalidUserName: boolean;
  selectedOption: string;
  createForm: FormGroup;
  user: User[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      roleCode: ['', Validators.required],
    });
  }
  onSubmit() {
    this.userService.getUsers().subscribe((data) => {
      this.user = data;
      console.log(this.user);

      var JSON = this.user;
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
        this.userService
        .createProfile(this.createForm.value)
        .subscribe((data) => {
          this.router.navigate(['login']);
        });
        alert(
          'User ' +
            this.createForm.controls.userName.value +
            ' created successfully'
        );
     
      }
      console.log(hasMatch);
    });
  }
}
