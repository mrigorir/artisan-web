import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-binance-payment-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './binance-payment-page.component.html',
  styleUrl:'./binance-payment-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BinancePaymentPageComponent { }
