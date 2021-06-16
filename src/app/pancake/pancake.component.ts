import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-pancake',
  templateUrl: '../chinese/chinese.component.html',
  styleUrls: ['../chinese/chinese.component.css']
})
export class PancakeComponent implements OnInit {



  constructor(private _service:FoodserviceService) { }

  FoodDisplay :any=[];

  ngOnInit(): void {
    this.FoodDisplay=this._service.italianfood().subscribe((result)=>{
      
      this.FoodDisplay=result;

    });  
  }

}
