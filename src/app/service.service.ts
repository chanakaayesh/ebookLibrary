import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ItemResponse, rootResponse, VolumeInfo } from './Model/searchRespose';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient,private golabledata:globalValue) { 


  }

  searchBook(searchKey:any,index:number,pageisze:number):Observable<rootResponse> {
      
    return this.http.get<rootResponse>(environment.searUrl+searchKey+'&startIndex='+index+'&maxResults='+pageisze)
            .pipe(result =>{
              this.golabledata.lastIndex =index;
              this.golabledata.lastpageSize =pageisze;
              this.golabledata.searchKey =searchKey;
                return result;
            });
  }
}

@Injectable({
  providedIn: 'root'
})
export class globalValue {

  public passingData!:ItemResponse ;
  public searchKey!:string;
  public lastIndex!:number;
  public lastpageSize!:number;

   }
