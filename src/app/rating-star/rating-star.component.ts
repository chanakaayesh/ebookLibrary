import { Component, Input, OnInit } from '@angular/core';
import { VolumeInfo } from '../Model/searchRespose';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.css']
})
export class RatingStarComponent implements OnInit {

  constructor() { }
  ratingCount:Number[] =[];
  nonRatingCount:Number[] =[];
  @Input()  bookDetails!:VolumeInfo;
  ngOnInit(): void {
  }



  checkrating(type:any):Number[]{
    if(type==='given'){
      if(this.bookDetails.averageRating){

       for (let index = 0; index < this.bookDetails.averageRating; index++) {
       this.ratingCount[index]=index;
       }
       return this.ratingCount;
      }else{
      
        return   [];
      }
  
    }else{
      if(this.bookDetails.averageRating){
        for (let index = 0; index <5-this.bookDetails.averageRating; index++) {
          this.nonRatingCount[index]=index;
          
          }
          console.log("un rating"+this.nonRatingCount.length)
        return  this.nonRatingCount;
       }else{
        for (let index = 0; index < 5; index++) {
          this.nonRatingCount[index]=index;
          }
         return this.nonRatingCount;
       }
    }
  }
}
