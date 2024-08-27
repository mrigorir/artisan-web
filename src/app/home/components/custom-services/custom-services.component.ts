import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'custom-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-services.component.html',
  styleUrl: './custom-services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomServicesComponent {
  darkMode = input.required<boolean>();
  badges = [
    {
      text: 'Web sites',
    },
    {
      text: 'Landing page',
    },
    {
      text: 'Ecommerce',
    },
    {
      text: 'Páginas corporativas',
    },
  ];
}
