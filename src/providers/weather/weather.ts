import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CountyProvider {
  constructor(public http: HttpClient) {
    console.log('Hello CountyProvider Provider');
  }

  getCountyInfo(county:string):Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+county+'&APPID=d2a9a65e20d3cd9470926c677194a356');
    
  }

}
