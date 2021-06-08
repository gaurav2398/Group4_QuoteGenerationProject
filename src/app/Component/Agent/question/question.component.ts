import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Questions } from 'src/app/Model/Questions';
import { QuestionsNew } from 'src/app/Model/QuestionsNew';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  questions: QuestionsNew[];
  quesNew: QuestionsNew;

  questionForm: FormGroup;
  submitted: boolean = false;
  accountNumber: string;
  premiumAmount: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.questionForm = this.formBuilder.group({
      premiumAmount:['', Validators.required],
      
      createdBy:localStorage.getItem('username'),
      userName: localStorage.getItem('policyUserName'),
      accountNumber: localStorage.getItem('accountNumber'),
      business_segment: localStorage.getItem('business_segment'),
      
      street:localStorage.getItem('street'),
      city: localStorage.getItem('city'),
      state: localStorage.getItem('state'),
      zip: localStorage.getItem('zip'),
      
      question1: 'select vehicle type',
      option1: ['', Validators.required],
      question2: 'Vehicle Model Year',
      option2: ['', Validators.required],
      question3: 'Vehicle Model',
      option3: ['', Validators.required],
      // question4: "Daily compute Distance",
      // option4: ['', Validators.required],
      // question5: "Service Center",
      // option5: ['', Validators.required]
    });

    if (localStorage.getItem('username') != null) {
      // this.userService.getQuestions().subscribe((data) => {
      //   this.questions = data;
      //   console.log(this.questions);
      // });
    } else this.router.navigate(['/login']);
  }
  onSubmit() {
    var premAmount;
    if (this.questionForm.controls.option1.value == 'Light') {
      this.premiumAmount += 200;
    } else if (this.questionForm.controls.option1.value == 'Heavy') {
      this.premiumAmount += 400;
    } else if (this.questionForm.controls.option1.value == 'Truck') {
      this.premiumAmount += 600;
    }

    if (this.questionForm.controls.option2.value == 'less than 2000') {
      this.premiumAmount += 200;
    } else if (this.questionForm.controls.option2.value == '2001 to 2010') {
      this.premiumAmount += 400;
    } else if (this.questionForm.controls.option2.value == 'More than 2010') {
      this.premiumAmount += 600;
    }

    if (this.questionForm.controls.option3.value == 'High Segment') {
      this.premiumAmount += 200;
    } else if (this.questionForm.controls.option3.value == 'Mid Segment') {
      this.premiumAmount += 400;
    } else if (this.questionForm.controls.option3.value == 'Economy') {
      this.premiumAmount += 600;
    }
    

    console.log(this.premiumAmount);
    console.log(this.questionForm.value);
    

    this.quesNew = { question1 :this.questionForm.controls.question1.value,
      question2 :this.questionForm.controls.question2.value,
      question3 :this.questionForm.controls.question3.value,
      option1 :this.questionForm.controls.option1.value,
      option2 :this.questionForm.controls.option2.value,
      option3 :this.questionForm.controls.option3.value,
      premiumAmount :this.premiumAmount,
      createdBy :this.questionForm.controls.createdBy.value,
      accountNumber :this.questionForm.controls.accountNumber.value,
      userName :this.questionForm.controls.userName.value,
      business_segment :this.questionForm.controls.business_segment.value,
      street:localStorage.getItem('street')+"",
      city: localStorage.getItem('city')+"",
      state: localStorage.getItem('state')+"",
      zip: localStorage.getItem('zip')+"", };

      alert('Policy Holder : '+localStorage.getItem('policyUserName') +'\nPremium Amount : '+this.premiumAmount+'\n\nPolicy Created Successfully');
    this.userService.createPolicy(this.quesNew).subscribe((data) => {    
      if (localStorage.getItem('rolecode') == '2') {
        this.router.navigate(['agent-home']);
      }  
      if (localStorage.getItem('rolecode') == '3') {
      this.router.navigate(['admin-home']);
      }      
    });

    this.premiumAmount = 0;
  }
}
