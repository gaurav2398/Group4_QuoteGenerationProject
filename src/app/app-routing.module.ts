import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './Component/Admin/adminhome/adminhome.component';
import { CreateprofileComponent } from './Component/Admin/createprofile/createprofile.component';
import { ViewallprofileComponent } from './Component/Admin/viewallprofile/viewallprofile.component';
import { AgenthomeComponent } from './Component/Agent/agenthome/agenthome.component';
import { CreateagentadminaccountComponent } from './Component/Agent/createagentadminaccount/createagentadminaccount.component';
import { CreatepolicyComponent } from './Component/Agent/createpolicy/createpolicy.component';
import { QuestionComponent } from './Component/Agent/question/question.component';
import { ViewAllAccountComponent } from './Component/Agent/view-all-account/view-all-account.component';
import { ViewallpolicyComponent } from './Component/Agent/viewallpolicy/viewallpolicy.component';
import { ContactusComponent } from './Component/contactus/contactus.component';
import { ErrorComponent } from './Component/error/error.component';
import { LoginComponent } from './Component/login/login.component';
import { CreateaccountComponent } from './Component/User/createaccount/createaccount.component';
import { ShowaccountComponent } from './Component/User/showaccount/showaccount.component';
import { UserhomeComponent } from './Component/User/userhome/userhome.component';
import { ViewpolicyComponent } from './Component/User/viewpolicy/viewpolicy.component';

const routes: Routes = [
  //Home 
  { path: 'login', component: LoginComponent },                     
  { path: 'contactus', component: ContactusComponent },                     

  //User
  { path: 'user-home', component: UserhomeComponent },
  { path: 'agent-home', component: AgenthomeComponent },
  { path: 'admin-home', component: AdminhomeComponent },
  { path: 'create-account', component: CreateaccountComponent },
  { path: 'show-account', component: ShowaccountComponent },

  //Agent
  { path: 'create-agent-admin-account', component: CreateagentadminaccountComponent },
  { path: 'view-policy', component: ViewpolicyComponent },
  { path: 'view-all-account', component: ViewAllAccountComponent },
  { path: 'create-policy', component: CreatepolicyComponent },
  { path: 'view-all-policy', component: ViewallpolicyComponent },
  { path: 'question', component: QuestionComponent },

  //Admin
  { path: 'create-profile', component: CreateprofileComponent },
  { path: 'view-all-profile', component: ViewallprofileComponent },
  
  //Default
  { path: '', component: LoginComponent },
   { path: '**', component: ErrorComponent },];    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
