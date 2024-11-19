import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddUser } from '../models/userClass';

@Injectable({
  providedIn: 'root',
})
export class registerUserService {

  //To access port is 4209
  private url = 'https://projectapi.gerasim.in/api/RealEstate/AddNewAgent';
  constructor(private http: HttpClient) {}

  getLogin(data: AddUser) {
    return this.http.post(this.url, data);
  }
}
