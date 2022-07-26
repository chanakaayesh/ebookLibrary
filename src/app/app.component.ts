import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { book, booklist } from './book';
import { ItemResponse, rootResponse } from './Model/searchRespose';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

  searchData:ItemResponse[] =[]

  constructor() {}
  ngOnInit(): void {

  

  }

    
 
}
