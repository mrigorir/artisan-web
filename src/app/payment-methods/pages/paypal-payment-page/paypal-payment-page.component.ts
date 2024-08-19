import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-paypal-payment-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './paypal-payment-page.component.html',
  styleUrl: './paypal-payment-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaypalPaymentPageComponent { }
