import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class loginUserService {
  private apiUrl = 'https://reqres.in/api/products/'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getData(id: string): Observable<any> {
    this.apiUrl = this.apiUrl + id;
    return this.http.get<any>(this.apiUrl);
  }
}
