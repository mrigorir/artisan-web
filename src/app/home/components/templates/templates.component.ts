import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TemplateSliderComponent } from '../template-slider/template-slider.component';

@Component({
  selector: 'templates',
  standalone: true,
  imports: [CommonModule, TemplateSliderComponent],
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatesComponent {
  textButton = input.required<string>();
  darkMode = input.required<boolean>();
  features = [
    {
      text: 'Suscríbete a un plan y haz que tu web site sea una realidad.',
      src1: './assets/images/section-2/star-section-2.gif',
      src2: './assets/images/section-2/star-section-2.gif',
    },
    {
      text: 'Ahorra tiempo de búsqueda, deja que nosotros nos encarguemos.',
      src1: './assets/images/section-2/clock-section-2.gif',
      src2: './assets/images/section-2/dark-clock-section-2.gif',
    },
    {
      text: 'Revisaremos la web hasta que quedes 100% satisfecho.',
      src1: './assets/images/section-2/eye-section-2.gif',
      src2: './assets/images/section-2/dark-eye-section-2.gif',
    },
  ]
}
