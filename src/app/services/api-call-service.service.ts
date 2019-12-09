import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCallServiceService {

  constructor(
    private http: HttpClient
  ) {}

  private formatErrors(error: any) {console.log(error.error.message);
    // tslint:disable-next-line: align
    return throwError(error.error);
  }

  get(params: any): Observable<any>{
    const url = `${environment.url}` + params;
    return this.http.get(url, {})
    .pipe(catchError(this.formatErrors));
  }
}
