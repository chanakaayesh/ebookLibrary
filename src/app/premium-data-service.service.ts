import { Injectable } from '@angular/core';
import { book } from './book';

@Injectable({
  providedIn: 'root'
})
export class PremiumDataServiceService {

  constructor() { }
  getData(){
    return (book);
  }
}
