import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { ContactComponent } from './main-page/contact/contact.component';
import { PostComponent } from './main-page/post/post.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ContactComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
