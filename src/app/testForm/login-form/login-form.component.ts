import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { UserService } from '../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  user: User;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router, private userService: UserService) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: [''],
      pass: ['']
    });

    this.userService.currentUser.subscribe(user => this.user = user);

  }

  onSubmit() {
    Auth.signIn({
      username: this.loginForm.get('email').value,
      password: this.loginForm.get('pass').value,
      validationData: {}  //optional
      })
      .then(data => {
        console.log(data);
        this.router.navigateByUrl('/mainPage');
      })
      .catch(err => console.log(err));
  }

}
