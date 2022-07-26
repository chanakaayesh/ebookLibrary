import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { booklist } from '../book';
import {ItemResponse, rootResponse, VolumeInfo } from '../Model/searchRespose';
import { globalValue, ServiceService } from '../service.service';
import { merge, of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'testap';
  list!:booklist[];


 // books =book;
  dataSource!: MatTableDataSource<any>;
  dataObs$!: Observable<any>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild('searchinput',{static: true})
  searchInput!:ElementRef;
  

  apirResponsedata!:rootResponse;
  searchData:ItemResponse[] =[];
  pageEvent!: PageEvent;
  getItemLength:number =100;

  dataSource1!: any[];

  constructor(private _changeDetectorRef: ChangeDetectorRef,private service: ServiceService,private gobalClass:globalValue,private renderer: Renderer2) {
   
  }
  ngOnInit(): void {
   // this.searchInput.nativeElement.value ='a'

    this.setLastSearchingData();
    this.setPagination();


    // if(this.pageEvent.previousPageIndex ==this.pageEvent.pageIndex){

    //     if(this.searchInput.nativeElement.value !=''){
    //         this.searchBook(this.searchInput.nativeElement.value,this.pageEvent.pageIndex)
    //     }
    // }
  

  }

  linkListToPaginator() {
    merge(this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        return of(this.searchData);
      })
    ).subscribe(res => {
      const from = this.paginator.pageIndex * 10;
      const to = from + 10;
      this.searchData = res.slice(from, to);
    });
  }


  setPagination() {
    // this.dataSource = new MatTableDataSource<any>(this.searchData);
    // this._changeDetectorRef.detectChanges();
    // this.dataSource.paginator = this.paginator;
    // this.dataObs$ = this.dataSource.connect();
    // this.dataSource.paginator.length =this.getItemLength;
  }
  /////////////////////////


  searchBook(searchingkey:any,index:number,pageSize:number): Promise<any>{


    return this.service.searchBook(searchingkey,index,pageSize).toPromise();
    
  }

 public async searchBookWaitting(searchingkey:any,index:number,pageSize:number){

  if(navigator.onLine){
    
    if(searchingkey !='' && searchingkey !=' '){
  
      this.apirResponsedata = await this.searchBook(searchingkey,index,pageSize);

        if(this.apirResponsedata.totalItems >0){
          if(this.searchInput.nativeElement.value !=''){
            this.searchData =this.apirResponsedata.items;
            this.getItemLength =this.apirResponsedata.totalItems;
          }

        }

    }else{
      this.searchData.length =0;
      this.setPagination();
    }
  } else{

      alert('No internet connection')
  }

  }

  shortbookNasme(name:string):String{

    if(name.length >30){
      return name.substring(0,30)
    }
    else{
      return name;
    }
  
   
  }





  async apiCall(index:number,pageSize:number){
  
  
        if(navigator.onLine){
          if(this.searchInput.nativeElement.value !=''){
            await this.searchBookWaitting(this.searchInput.nativeElement.value,index,pageSize);
       
        }
        }
        else{
            alert('No Internet connection')
        }

  }

  checkImageUrl(body:VolumeInfo):String{

    if(body.imageLinks!){
        if(body.imageLinks.smallThumbnail!){
          return body.imageLinks.smallThumbnail
        }
        else{
          return '';
        }
    }else{
      return ''
    }
    
  }

    viewClick(data:ItemResponse){
       this.gobalClass.passingData =data;
  

      
    }

    setLastSearchingData(){

    // alert("1:"+this.gobalClass.searchKey+"  _ "+"1:"+this.gobalClass.lastIndex+"  _ "+"1:"+this.gobalClass.lastpageSize)
      if( this.gobalClass.searchKey !=null && this.gobalClass.lastIndex  !=null &&  this.gobalClass.lastpageSize !=null ){
     
          this.searchInput.nativeElement.value =this.gobalClass.searchKey ;

          this.apiCall(this.gobalClass.lastIndex ,this.gobalClass.lastpageSize );

      }
    }
 
}