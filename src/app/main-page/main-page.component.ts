import { Component, OnInit } from '@angular/core';
import { Auth, API } from 'aws-amplify';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CognitoAccessToken, CognitoUserSession, CognitoIdToken } from 'amazon-cognito-identity-js';
import { PostModel } from './post-model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  postForm: FormGroup;
  userIDToken: String;
  posts = Array<PostModel>();

  constructor(private fb: FormBuilder) { }

  async ngOnInit() {

    this.postForm = this.fb.group({
      postText: ['']
    });

    await Auth.currentSession().then(user => {
       this.userIDToken = user.getIdToken().getJwtToken();
       console.log(this.userIDToken);
      });

     await this.getPost().then(response => {
        console.log(response);
        this.posts = response;
      })
      .catch(err =>{
        console.log(err);
      });
      console.log("Your posts to display: ");
      console.log(this.posts);
   

    /*Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => console.log(user))
    .catch(err => console.log(err));
    
    Auth.currentSession()
    .then(data => console.log(data))
    .catch(err => console.log(err));*/


    }



     async getPost() {
      let apiName = 'postAPI'; // replace this with your api name.
      let path = '/posts'; //replace this with the path you have configured on your API
      let myInit = {
        headers: {
           Authorization: this.userIDToken
          } // OPTIONAL
      } 
      return await API.get(apiName, path, myInit);
    }


    sendPost() {
      let apiName = 'postAPI'; // replace this with your api name.
      let path = '/posts'; //replace this with the path you have configured on your API
      let myInit = {
          body: {
            user: 'michal.pytlik98@gmail.com',
            date: new Date().toISOString(),
            postText: this.postForm.get('postText').value
          }, // replace this with attributes you need
          headers: {
            Authorization: this.userIDToken
          } // OPTIONAL
      }

      API.post(apiName, path, myInit).then(response => {
          // Add your code here
      }).catch(error => {
          console.log(error.response)
      });

      this.getPost();

    }
    

}
/*curl -H "origin: localhost:4200/mainPage" -v "https://4ukwqzy8yl.execute-api.eu-central-1.amazonaws.com/socialapp/posts"



ET https://4ukwqzy8yl.execute-api.eu-central-1.amazonaws.com/socialapp/posts 403*/