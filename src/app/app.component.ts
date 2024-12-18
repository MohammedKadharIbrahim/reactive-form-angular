import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,ReactiveFormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'my-app3';
  userForm!:FormGroup;

  countryList=[
    {"countryname":"INDIA"},
    {"countryname":"USA"},
    {"countryname":"ENGLAND"}
  ];

  ngOnInit(): void {
    this.userForm =new FormGroup({
      'firstname':new FormControl(null,Validators.required),
      'lastname':new FormControl(null),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'gender':new FormControl(null),
      'isMarried':new FormControl(null),
      'address':new FormGroup({
      'country':new FormControl(null),
      'city':new FormControl(null),
      'street':new FormControl(null),
      'pincode':new FormControl(null),
      })
    });

    this.userForm.setValue({
      firsname:"saravana",
      lastname:"kumar",
      email:"saravana@gamil.com",
      gender:'male',
      isMarried:"false",
      adsress:{
        country:"USA",
        city:"island",
        street:"war street",
        pincode:"638 630"
      }
    });

    this.userForm.patchValue({
      firstname:"apsal"
    })


  }

  onSubmit(){
    console.log(this.userForm);
    // this.userForm.reset();
  }
}
