import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-chinese',
  templateUrl: './chinese.component.html',
  styleUrls: ['./chinese.component.css']
})
export class ChineseComponent implements OnInit {

  
  constructor(private _service:FoodserviceService) { }

  FoodDisplay :any=[];

  ngOnInit(): void {

    this.FoodDisplay=this._service.chinesefood().subscribe((result)=>{
      
      this.FoodDisplay=result;

    });    
  }

}
