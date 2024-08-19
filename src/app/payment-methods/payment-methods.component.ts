import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-payment-methods',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './payment-methods.component.html',
  styleUrl: './payment-methods.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaymentMethodsComponent { }
