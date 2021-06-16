import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  
  constructor(private _http: HttpClient) { }
  Api_key:any ="fca02e04610f7abf8f32e56c2d5194fc";

  indianUrl=`https://api.edamam.com/search?q=food&app_id=dcb2af9d&app_key=fca02e04610f7abf8f32e56c2d5194fc&cuisineType=Indian`;

  chineseUrl=`https://api.edamam.com/search?q=food&app_id=dcb2af9d&app_key=fca02e04610f7abf8f32e56c2d5194fc&cuisineType=Indian`;

  italianUrl=`https://api.edamam.com/search?q=food&app_id=dcb2af9d&app_key=fca02e04610f7abf8f32e56c2d5194fc&cuisineType=Italian`;

  dessertUrl=`https://api.edamam.com/search?q=food&app_id=dcb2af9d&app_key=fca02e04610f7abf8f32e56c2d5194fc&dishType=desserts`;

  teaUrl=`https://api.edamam.com/search?q=food&app_id=dcb2af9d&app_key=fca02e04610f7abf8f32e56c2d5194fc&dishType=teatime`;

  drinksUrl=`https://api.edamam.com/search?q=food&app_id=dcb2af9d&app_key=fca02e04610f7abf8f32e56c2d5194fc&dishType=drinks`;

  soupUrl=`https://api.edamam.com/search?q=food&app_id=dcb2af9d&app_key=fca02e04610f7abf8f32e56c2d5194fc&dishType=soup`;

  saladUrl=`https://api.edamam.com/search?q=food&app_id=dcb2af9d&app_key=fca02e04610f7abf8f32e56c2d5194fc&dishType=salad`;



  

  indianfood():Observable<any>
  {
    return this._http.get(this.indianUrl);
  }

  chinesefood():Observable<any>
  {
    return this._http.get(this.chineseUrl);
  
  }
  italianfood():Observable<any>
  {
    return this._http.get(this.italianUrl);
  }

  dessertsfood():Observable<any>
  {
    return this._http.get(this.dessertUrl);
  }

  drinksfood():Observable<any>
  {
    return this._http.get(this.drinksUrl);
  }

  soupfood():Observable<any>
  {
    return this._http.get(this.soupUrl);
  }

  saladfood():Observable<any>
  {
    return this._http.get(this.saladUrl);
  }
}
