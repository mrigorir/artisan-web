import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { withDebugTracing } from '@angular/router';

@Component({
  selector: 'benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.components.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BenefitsComponent {
  darkMode = input.required<boolean>();
  textButton = input.required<string>();
  benefitsFeatures = [
    {
      text: 'Administre fácilmente sus requerimientos con un tablero de Trello.',
      src1: './assets/images/section-4/document-section-4.gif',
      src2: './assets/images/section-4/light-document-section-4.gif',
    },

    {
      text: 'Obtén tu landing page en tan solo 3 días, (solo valida para landing page cortas).',
      src1: './assets/images/section-4/rocket-section-4.gif',
      src2: './assets/images/section-4/light-rocket-section-4.gif',
    },

    {
      text: '¡No hay sorpresas! Paga el mismo precio fijo cada mes.',
      src1: './assets/images/section-4/lock-section-4.gif',
      src2: './assets/images/section-4/light-lock-section-4.gif',
    },

    {
      text: 'Cada uno de tus proyectos está hecho especialmente para ti y es 100% tuyo.',
      src1: './assets/images/section-4/print-section-4.gif',
      src2: './assets/images/section-4/light-print-section-4.gif',
    },

    {
      text: 'Agregue nuevas características según sea necesario y haga una pausa o cancele en cualquier momento.',
      src1: './assets/images/section-4/screen-section-4.gif',
      src2: './assets/images/section-4/light-screen-section-4.gif',
    },

    {
      text: 'Una calidad de diseño y funcionalidad increíble a tu alcance siempre que la necesites.',
      src1: './assets/images/section-4/check-section-4.gif',
      src2: './assets/images/section-4/check-section-4.gif',
    },
  ];
}
