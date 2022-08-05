import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  
  headers = new HttpHeaders({
    'x-api-key': environment.CONTACTS
  });

  get(url: string): Observable<any> {
    return this._http.get(environment.API_BASE_PATH + url, { headers: this.headers })
      .pipe(map((data: any) => {
        return data;
      }), catchError((err: HttpErrorResponse) => this.handleError(err)));
  }

  private handleError(err: HttpErrorResponse) {
      return throwError(() => new Error(err.message));
  }

}
