import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchUrl = 'http://localhost:3000/patient/search';

  constructor(private http:HttpClient) { }

  search(data:any) {
    return this.http.get(this.searchUrl, {
      params: {
      
      }
    })
  }
}
