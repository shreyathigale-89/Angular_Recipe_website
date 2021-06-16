import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe-app';



  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get(`https://api.edamam.com/search?q=&app_id=dcb2af9d&app_key=fca02e04610f7abf8f32e56c2d5194fc&diet=high-protein&cuisineType=indian`).subscribe((result) => {
      this.HealthyFoodDisplay = result;
      console.log(result);

    })
  }

  value = '';
  error = '';
  FoodDisplay: any = [];
  HealthyFoodDisplay: any = [];


  update(value: any) {
    this.value = value;
    this._http.get(`https://api.edamam.com/search?q=${this.value}&app_id=dcb2af9d&app_key=fca02e04610f7abf8f32e56c2d5194fc`).subscribe(

      (result) => {

        this.FoodDisplay = result;

        (<HTMLInputElement>document.getElementById("search-comp")).style.display = "block";

        (<HTMLInputElement>document.getElementById("food-category")).style.display = "none";

        console.log(result);
      },

      (error) => {

        console.log(error);

        this.error = error.message;

      });
  }

  loginform()
  {
    (<HTMLInputElement>document.getElementById("loginform")).style.display = "block";

    (<HTMLInputElement>document.getElementById("Header")).style.opacity = "0.1";
  }

  hide()
  {    
    (<HTMLInputElement>document.getElementById("search-comp")).style.display = "none";
  }
}
