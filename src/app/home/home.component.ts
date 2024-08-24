import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  OnInit,
  signal,
} from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TemplatesComponent } from './components/templates/templates.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TemplatesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
  textButton = signal<string>('Nuestros planes');
  darkMode = signal<boolean>(false);
  _darkMode = computed(() => this.darkMode());
  _textButton = computed(() => this.textButton());
  fakeArray = new Array(50);

  setTheme(value: boolean) {
    this.darkMode.set(value);
  }
}
