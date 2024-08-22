import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'template-slider',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './template-slider.component.html',
  styleUrl: './template-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateSliderComponent {
  templates = [
    {
      title: 'Plantilla',
      subtitle: '1 VER'
    },
    {
      title: 'Plantilla',
      subtitle: '2 VER'
    },
    {
      title: 'Plantilla',
      subtitle: '3 VER'
    }
  ];
}
