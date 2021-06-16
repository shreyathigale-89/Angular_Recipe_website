import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PancakeComponent } from './pancake/pancake.component';
import { ItalianComponent } from './italian/italian.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChineseComponent } from './chinese/chinese.component';
import { IndianComponent } from './indian/indian.component';
import { SaladComponent } from './salad/salad.component';
import { SoupComponent } from './soup/soup.component';
import { TeaComponent } from './tea/tea.component';
import { DrinksComponent } from './drinks/drinks.component';
import { DessertsComponent } from './desserts/desserts.component';

const routes: Routes = [

  { path: 'Indian', component: IndianComponent },
  { path: 'chinese', component: ChineseComponent },
  { path: 'italian', component: ItalianComponent },
  { path: 'dessert', component: DessertsComponent },
  { path: 'drinks', component: DrinksComponent },
  { path: 'tea', component: TeaComponent },
  { path: 'soup', component: SoupComponent },
  { path: 'salad', component: SaladComponent },
  { path: 'pancake', component: PancakeComponent },
  {path:'user',component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
