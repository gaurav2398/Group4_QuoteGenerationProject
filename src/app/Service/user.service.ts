import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Accounts } from '../Model/Accounts';
import { Questions } from '../Model/Questions';
import { QuestionsNew } from '../Model/QuestionsNew';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  status: string;
  constructor(private http: HttpClient) {}
  baseUrl: string = 'http://localhost:3000/'; // Base Url
  
  getAccounts() {
    return this.http.get<Accounts[]>(this.baseUrl+'accounts');
  } // Get All accounts
  
  getUserById(createdBy: string) {
    return this.http.get<User>(this.baseUrl + 'accounts/' + createdBy);
  } // Get User By  Id

  createAccount(user: Accounts) {
    return this.http.post(this.baseUrl+'accounts', user);
  } // Create New Insured Account

  getQuestions() {
    return this.http.get<Questions[]>(this.baseUrl+'questions');
  }
  createPolicy(question: QuestionsNew) {
    return this.http.post(this.baseUrl+'policy', question);
  } // Create New Insured Account
  getPolicy() {
    return this.http.get<Questions[]>(this.baseUrl+'policy');
  } // Create New Insured Account
  
  getUsers() {
    return this.http.get<User[]>(this.baseUrl+'users');
  } // Get Profile
  createProfile(user: User) {
    return this.http.post(this.baseUrl+'users', user);
  } // Create New Profile
}
