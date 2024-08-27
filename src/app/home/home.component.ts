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
import { BodyComponent } from './components/body/body.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { CustomServicesComponent } from './components/custom-services/custom-services.component';
import { LoaderComponent } from './shared/loader/loader.component';


@Component({
  selector: 'home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    TemplatesComponent,
    BodyComponent,
    BenefitsComponent,
    CustomServicesComponent,
    LoaderComponent,
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
