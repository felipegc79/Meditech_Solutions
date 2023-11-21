import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppTitulo } from './welcome/components/titulo/titulo.component';
import { ParrafoComponent } from './welcome/components/parrafo/parrafo.component';
import { HomeComponent } from './welcome/page/home/home.component';
import { NosotrosComponent } from './welcome/page/nosotros/nosotros.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent
  },
  
  {
    path: 'Nosotros',
    component: NosotrosComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AppTitulo,
    ParrafoComponent,
    HomeComponent,
    NosotrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
