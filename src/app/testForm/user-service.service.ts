import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userDataSource = new BehaviorSubject(new User());
  currentUser = this.userDataSource.asObservable();

  constructor() { }

  update(user: User) {this.userDataSource.next(user);}

}
