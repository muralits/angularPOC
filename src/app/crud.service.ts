import { Injectable } from '@angular/core';
import { baseURL } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

 public getpublicdata():Observable<any>{
  return this.http.get(`${baseURL}api/User/Public`,{responseType: 'text'}).pipe(
    catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse): any {
    console.log("User Not found");
      return (error);
  }
}
