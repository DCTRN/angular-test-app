import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user-service.service';

@Component({
  selector: 'reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss']
})
export class RegFormComponent implements OnInit {

  user: User;
  regForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router, private userService: UserService) { }

  ngOnInit() {

    this.regForm = this.fb.group({
      email: [''],
      pass: ['']
    });

    this.userService.currentUser.subscribe(user => this.user = user);

  }

  onSubmit() {
    console.log("dzialam");
    this.user.email = this.regForm.get('email').value;
    this.user.password = this.regForm.get('pass').value;
    this.userService.update(this.user);
    Auth.signUp({
      username: this.user.email,
      password: this.user.password,
      attributes: {
      },
      validationData: []  //optional
      })
      .then(data => {
        console.log(data);
        this.router.navigateByUrl('/regCode');
      })
      .catch(err => console.log(err));
  }
}
