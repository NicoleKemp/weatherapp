import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(protected http: HttpClient) {
  }

  getWeatherData() {
    return this.http.post('http://weather.news24.com/ajaxpro/Weather.Code.Ajax,Weather.ashx/GetTideForecast', { cityId: 1 }).subscribe(x => {
      console.log(x);
    });
  }

  // getForecast48Hour(): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'X-AjaxPro-Method': 'GetForeCast48Hour' })
  //   };
  //   return this.http.post('http://weather.news24.com/ajaxpro/Weather.Code.Ajax,Weather.ashx', { "cityId": "77107" }, httpOptions)
  // }; ///weatherApi/GetForeCast48Hour
  getForecast48Hour(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'X-AjaxPro-Method': 'GetForeCast48Hour' })
    };
    return this.http.post('/weatherApi', { "cityId": "77107" }, httpOptions)
  }; ///weatherApi/GetForeCast48Hour
}
