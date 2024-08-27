import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'loader',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  darkMode = input.required<boolean>();
}
