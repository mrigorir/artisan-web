import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent implements OnInit {
  fakeArray = new Array(50);
  textButton = signal<string>('Nuestros planes');
  darkMode = signal<boolean>(false);
  loader = signal<boolean>(true);
  _darkMode = computed(() => this.darkMode());
  _textButton = computed(() => this.textButton());
  _loader = computed(() => this.loader());

  ngOnInit(): void {
    setTimeout(() => {
      this.loader.set(false);
    }, 4000);
  }

  setTheme(value: boolean) {
    this.darkMode.set(value);
  }
}
