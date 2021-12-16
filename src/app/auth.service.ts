import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  errorMsg: any;

  constructor(private http:HttpClient) { }
  login(data: any):Observable<any>{
    return this.http.post(`${baseURL}api/login/`,data,{responseType: 'text'}).pipe(
      catchError(error => {
          this.errorMsg = error.message;
          return of([this.getServerErrorMessage]);
      })
  );
  }
  
 private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
        case 404: {
          return `Not Found: ${error.message}`;
        }
        case 403: {
            return `Access Denied: ${error.message}`;
        }
        case 500: {
            return `Internal Server Error: ${error.message}`;
        }
        default: {
            return `Unknown Server Error: ${error.message}`;
        }
      }
    }
}
