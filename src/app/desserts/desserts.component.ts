import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-desserts',
  templateUrl: '../chinese/chinese.component.html',
  styleUrls: ['../chinese/chinese.component.css']
})
export class DessertsComponent implements OnInit {

  constructor(private _service:FoodserviceService) { }

  FoodDisplay :any=[];

  ngOnInit(): void {

    this.FoodDisplay=this._service.dessertsfood().subscribe((result)=>{
      
      this.FoodDisplay=result;

    });    
  }

}
