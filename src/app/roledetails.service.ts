import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoledetailsService {

  constructor(private http:HttpClient) { }

  public publicRole():Observable<any>{
    return this.http.get("https://pocjwtapi.azurewebsites.net/api/User/Public",{responseType: 'text'}).pipe(
      catchError(this.handleError)
      );
    }
    public adminRole():Observable<any>{
      return this.http.get("https://pocjwtapi.azurewebsites.net/api/User/Admin",{responseType: 'text'}).pipe(
        catchError(this.handleError)
        );
      }
      public developerRole():Observable<any>{
        return this.http.get("https://pocjwtapi.azurewebsites.net/api/User/Developers",{responseType: 'text'}).pipe(
          catchError(this.handleError)
          );
        }
        public admindevRole():Observable<any>{
          return this.http.get("https://pocjwtapi.azurewebsites.net/api/User/AdminsAndDevelopers",{responseType: 'text'}).pipe(
            catchError(this.handleError)
            );
          }
    handleError(error: HttpErrorResponse): any {
      console.log("User Not found");
        return (error);
    }
}
