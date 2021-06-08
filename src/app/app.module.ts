import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Component/login/login.component';
import { UserhomeComponent } from './Component/User/userhome/userhome.component';
import { AgenthomeComponent } from './Component/Agent/agenthome/agenthome.component';
import { AdminhomeComponent } from './Component/Admin/adminhome/adminhome.component';
import { CreateaccountComponent } from './Component/User/createaccount/createaccount.component';
import { ShowaccountComponent } from './Component/User/showaccount/showaccount.component';
import { ViewpolicyComponent } from './Component/User/viewpolicy/viewpolicy.component';
import { ViewAllAccountComponent } from './Component/Agent/view-all-account/view-all-account.component';
import { CreatepolicyComponent } from './Component/Agent/createpolicy/createpolicy.component';
import { ViewallpolicyComponent } from './Component/Agent/viewallpolicy/viewallpolicy.component';
import { CreateagentadminaccountComponent } from './Component/Agent/createagentadminaccount/createagentadminaccount.component';
import { QuestionComponent } from './Component/Agent/question/question.component';
import { CreateprofileComponent } from './Component/Admin/createprofile/createprofile.component';
import { ViewallprofileComponent } from './Component/Admin/viewallprofile/viewallprofile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { ErrorComponent } from './Component/error/error.component';
import { ContactusComponent } from './Component/contactus/contactus.component';
import { GenerateReportComponent } from './Component/Admin/generate-report/generate-report.component';
@NgModule({
  declarations: [  
    AppComponent,
    LoginComponent,
    UserhomeComponent,
    AgenthomeComponent,
    AdminhomeComponent,
    CreateaccountComponent,
    ShowaccountComponent,
    ViewpolicyComponent,
    ViewAllAccountComponent,
    CreatepolicyComponent,
    ViewallpolicyComponent,
    CreateagentadminaccountComponent,
    QuestionComponent,
    CreateprofileComponent,
    ViewallprofileComponent,
    ErrorComponent,
    ContactusComponent,
    GenerateReportComponent
  ],
  imports: [
    MatTabsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
