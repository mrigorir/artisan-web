import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, OnInit, output, signal } from '@angular/core';

@Component({
  selector: 'heading',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  darkMode: boolean = false;
  onSetDarkMode = output<boolean>();

  ngOnInit(): void {
    if (localStorage.getItem('darkTheme') === 'true') {
      this.onSetDarkMode.emit(this.darkMode = true);
      return;
    }
    this.onSetDarkMode.emit(this.darkMode = false);
  }

  setDarkMode():void {
    this.onSetDarkMode.emit(this.darkMode = !this.darkMode);
    localStorage.setItem('darkTheme', JSON.stringify(this.darkMode));
  }

}
