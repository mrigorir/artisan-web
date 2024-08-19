import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatesComponent { }
