import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdashboarddataService {

  constructor(
   
    private http: HttpClient,
  ) { }

  getApiData(): Observable<any>{

    const url = "https://67dea54f471aaaa742852b3b.mockapi.io/api/v1/get-all/id";
    return this.http.get(url);
  }
  
}
