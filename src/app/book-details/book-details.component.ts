import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndustryIdentifier, ItemResponse, VolumeInfo } from '../Model/searchRespose';
import { globalValue } from '../service.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  getItem!:ItemResponse;
  getBookDetails!:VolumeInfo;

  constructor(private route: ActivatedRoute,private gobalClass:globalValue) { }

  ngOnInit(): void {

    this.getItem = this.gobalClass.passingData;
    this.getBookDetails=this.getItem!.volumeInfo;

    if(this.getBookDetails.averageRating){
      console.log("book title is : "+ this.getBookDetails.averageRating)
    }else{
      console.log("book title is : "+ "NO RATING")
    }

  }

  checkboolinValue(value:boolean):string{

    if(value ){
      return 'Yes'
    }
    else if(!value){
      return "No"
    }
    else{
      return '';
    }
  }

  getAllIndustryIdentifier(data:IndustryIdentifier[],type:number ) : string{

      let industrylist='';
      if(type==10){
        for(let i =1;i<data.length;i++){
          if(data[i].type==="ISBN_10"){
            if(industrylist ===''){
              industrylist =data[i].identifier;
            }else{
              industrylist =industrylist+" , "+data[i].identifier;
            }
          }
  
        }

   
      }
      if(type==13){

        for(let i =1;i<data.length;i++){
          if(data[i].type==="ISBN_13"){
            if(industrylist ===''){
              industrylist =data[i].identifier;
            }else{
              industrylist =industrylist+" , "+data[i].identifier;
            }
          }

        }
      }

      return industrylist;

  }

  empatyValuesChecker(attribut:any):string{

    return attribut+'\t'+"details not Available";
  }
}
