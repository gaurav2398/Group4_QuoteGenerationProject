import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})

export class ContactusComponent implements OnInit {

  name: any;
  email: any;
  mobileNo: any;
  message: any;


 //Create FormGroup
  //Create FormGroup
 contactForm:FormGroup;
 submitted=false;
 

 constructor(private formBuilder: FormBuilder) { }
 
 ngOnInit()
 {
   this.contactForm = this.formBuilder.group({									
     name: ['', Validators.required],									
     email: ['', [Validators.required, Validators.email]],
     mobileNo: ['', [Validators.required, Validators.pattern('^[6-9]\d{9}$')]],
     acceptTerms: [false, Validators.requiredTrue]									
   });									
        
 }
 get f() { return this.contactForm.controls; }
 
 submitForm()
 {
       //   const msg = 'Your name is ${this.name}';
       // alert(msg);

       this.submitted = true;

       // stop here if form is invalid
       if (this.contactForm.invalid) {
           return;
       }

       
       // display form values on success
       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value, null, 4));
 
}
}