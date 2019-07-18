import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilledFormService {

  constructor( protected http: HttpClient ) { }

  private readonly API_URL = 'http://localhost:3030';

 getForms(): Observable<any[]> {
    let endpoint = `${this.API_URL}${'/forms'}`;
    return this.http.get<any>(endpoint, this.getRequestHeaders())
    .pipe(
      catchError(err => {           
        return throwError(err);
      })
    );
  }

   protected getRequestHeaders(): { headers: HttpHeaders | { [header: string]: string | string[]; } } {
    let headers;
    headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return { headers: headers };
  }
}
