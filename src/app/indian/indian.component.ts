import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from './../foodservice.service';

@Component({
  selector: 'app-indian',
  templateUrl: '../chinese/chinese.component.html',
  styleUrls: ['../chinese/chinese.component.css']
})
export class IndianComponent implements OnInit {


  constructor(private _service: FoodserviceService) { }

  //display data
  FoodDisplay: any = [];



  ngOnInit(): void {

    this._service.indianfood().subscribe((result) => {

      this.FoodDisplay = result;
      console.log(result);
    });
  }

}
