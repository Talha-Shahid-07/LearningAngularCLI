import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { registerUserService } from '../services/registerUser.service';
import { AddUser } from '../models/userClass';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css',
})
export class SignupPageComponent implements OnInit {
  constructor(private loginService: registerUserService) {}

  fb = inject(FormBuilder);

  loginForm = this.fb.nonNullable.group({
    // userId: ['', Validators.required],
    userName: ['', Validators.required],
    password: ['', Validators.required],
    emailId: ['', Validators.required],
    fullName: ['', Validators.required],
    role: ['', Validators.required],
    createdDate: ['', Validators.required],
    projectName: ['', Validators.required],
  });

  data: AddUser = new AddUser();

  ngOnInit(): void {
    this.loginService.getLogin(this.data).subscribe((res) => {
      console.log(res);
    });
  }

  getData() {
    const {
      userName,
      password,
      emailId,
      fullName,
      role,
      createdDate,
      projectName,
    } = this.loginForm.getRawValue();
    // this.data.userId = userId;
    this.data.userName = userName;
    this.data.password = password;
    this.data.emailId = emailId;
    this.data.fullName = fullName;
    this.data.role = role;
    this.data.createdDate = createdDate;
    this.data.projectName = projectName;

    console.log(this.data);

    this.loginService.getLogin(this.data).subscribe((res) => {
      console.log(res);
    });
  }
}
