import { Component } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { SignupService } from 'src/app/Service/signup/signup.service';
import { Signup } from 'src/app/models/signup.model';
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.sass']
})
export class SignupPageComponent  {

      constructor(
         private signupService : SignupService,
         private router:Router,
       ) { }

       getErrorMessage() {
        if (this.email.hasError('required')) {
          return 'You must enter a value';
        }
        return this.email.hasError('email') ? 'Not a valid email' : '';
      }
hide=true;
email = new FormControl('', [Validators.required, Validators.email]);
username : string ="";
password : string ="";




}