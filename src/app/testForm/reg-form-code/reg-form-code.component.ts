import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from 'aws-amplify';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-reg-form-code',
  templateUrl: './reg-form-code.component.html',
  styleUrls: ['./reg-form-code.component.scss']
})
export class RegFormCodeComponent implements OnInit {

  codeForm: FormGroup;
  private email: string;
  private state: Observable<any>;

  constructor(private fb: FormBuilder, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.codeForm = this.fb.group({
      code: ['']
    });
    this.state= this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))

    console.log("state:" + this.state);
    this.state.subscribe(data => {
      console.log("data aftes sub:");
      console.log(data.email);
      this.email = data.email;
    });
    console.log("email: " + this.email);
  }

  onCode() {
    let code = this.codeForm.get('code').value;
    Auth.confirmSignUp(this.email, code, {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: true    
  }).then(data => {
    console.log(data);
    this.router.navigateByUrl('/login');
  })
    .catch(err => console.log(err));
    console.log("work perfectly fine; code: " + code);
  }
}
