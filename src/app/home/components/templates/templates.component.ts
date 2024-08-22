import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'templates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatesComponent {
  textButton = input.required<string>();
  darkMode = input.required<boolean>();
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
  features = [
    {
      text: 'Suscríbete a un plan y haz que tu web site sea una realidad',
      src: './assets/images/section-2/ring-section-2.svg'
    },
    {
      text: 'Ahorra tiempo de búsqueda, deja que nosotros nos encarguemos',
      src: './assets/images/section-2/exclamation-sign-section-2.svg'
    },
    {
      text: 'Revisaremos la web hasta que quedes 100% satisfecho',
      src: './assets/images/section-2/blocks-section-2.svg'
    },
  ]
}
