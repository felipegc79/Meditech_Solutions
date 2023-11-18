import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    WhatsappButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    WhatsappButtonComponent
  ]
})
export class SharedModule { }
