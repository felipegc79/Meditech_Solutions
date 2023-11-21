import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './welcome/page/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './welcome/page/nosotros/nosotros.component';

const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
