import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styles: [
  ]
})
export class OfferFormComponent {
  offerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private websocketService: WebsocketService
  ) {}

  ngOnInit(): void {
    this.offerForm = this.fb.group({
      user: ['Leiner Barrios', [Validators.required]],
      offer: [150000, [Validators.required]]
    })
  }

  sendOffer() {
    this.websocketService.sendOffer(this.offerForm.value);
  }
}
