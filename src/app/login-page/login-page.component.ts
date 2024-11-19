import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GetDataService } from '../services/getData.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private getDataService: GetDataService,
    private router: Router
  ) {}

  fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    year: ['', Validators.required],
  });

  ngOnInit(): void {
    this.getDataService.getData('').subscribe((data) => {
      console.log(data);
    });
  }

  getData() {
    const { id, name, year } = this.form.getRawValue();
    this.verifyLogin(id, name, year);
  }

  verifyLogin(id: any, name: string, year: string) {
    this.getDataService.getData(id).subscribe((data) => {
      debugger
      console.log(data?.data?.name);
      if (data?.data?.name == name && data?.data?.year == year) {
        console.log('Login Successful');
        localStorage.setItem('user', JSON.stringify(data))
        this.router.navigate(['dashboard']);
      } else {
        alert('Invalid Credentials');
      }
    });
  }
}
