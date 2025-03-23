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

  getApiData(): Observable<any> {

    const url = "https://67dea54f471aaaa742852b3b.mockapi.io/api/v1/get-all/id";
    return this.http.get(url);
  }

  postData(payLoad:any): Observable<any> {

    // const payLoad = {
    //   "empcode": "2025-03-22T23:29:08.529Z",
    //   "name": "Aades",
    //   "email": "https://avatars.githubusercontent.com/u/75146384",
    //   "phone": "Invalid faker method - random.word",
    //   "id": "1"
    // };
    const url = "https://67dea54f471aaaa742852b3b.mockapi.io/api/v1/get-all/id";
    return this.http.post(url, payLoad);
  }

}
