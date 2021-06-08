import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Accounts } from 'src/app/Model/Accounts';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css'],
})
export class CreateaccountComponent implements OnInit {
  selectedOption: string;
  createForm: FormGroup;
  submitted: boolean = false;
  createdBy: string;
  userName: string;
  accounts: Accounts[];
  hasMatch:string ;
  invalidAccountNumber:boolean;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService    
  ) {}

  ngOnInit() {
    if (localStorage.getItem('username') != null) {      
      if(localStorage.getItem('rolecode') == '1')
      {
        this.createdBy='self';
        this.userName=localStorage.getItem('username')+"";          
      }   
    } else this.router.navigate(['/login']);

    console.log(localStorage.getItem('rolecode')+"");
    
    this.createForm = this.formBuilder.group({
      
      createdBy:this.createdBy,      
      userName:this.userName,      
      name: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      Bus_seg: ['', Validators.required],
      accountNumber: ['', Validators.required],
    });
    
    this.hasMatch = 'no';
    //Validation to check user account is already exists or not
    this.userService.getAccounts().subscribe((data) => {
      this.accounts = data;
      console.log(this.accounts);

      var JSON = this.accounts;

      // console.log(JSON+"");
      // console.log(localStorage.getItem('username')+"");
      
      for (var index = 0; index < JSON.length; ++index) {
        var jsonData = JSON[index];
        
        if (localStorage.getItem('username') == jsonData.userName) {
          this.hasMatch = 'yes';

          break;
        }
      }
      console.log(this.hasMatch);
    });
  }
  onSubmit() {
     console.log(this.createForm.value);
      this.submitted = true;
         if(this.createForm.invalid){
           return;
         }
     this.userService.getAccounts().subscribe((data) => {
      this.accounts = data;
      console.log(this.accounts);

      var JSON = this.accounts;
      var hasMatch = false;

      for (var index = 0; index < JSON.length; ++index) {
        var jsonData = JSON[index];

        if (this.createForm.controls.accountNumber.value == jsonData.accountNumber) {
          hasMatch = true;                             
        }       
      }
      if(hasMatch == false){
         this.userService.createAccount(this.createForm.value).subscribe( data => {
          alert('Account is created Successfully');
                this.router.navigate(['login']);
              });    
      }
     
      if(hasMatch == true){
         this.invalidAccountNumber= true;
      }
      console.log(hasMatch);
    });   
      
  }
}
