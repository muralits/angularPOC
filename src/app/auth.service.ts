import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  login(data: JSON):Observable<any>{
    console.log('I am server')
    console.log(data)
    return this.http.post(`${baseURL}api/login/`,data);
  }
}
