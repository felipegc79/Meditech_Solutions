// whatsapp-button.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.scss']
})
export class WhatsappButtonComponent {
  status = 0; // cerrado

  toggleForm() {
    this.status === 0 ? this.openForm() : this.closeForm();
  }

  openForm() {
    this.status = 1;
  }

  closeForm() {
    this.status = 0;
  }
}
