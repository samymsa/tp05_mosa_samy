import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrl: './about-me-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMePageComponent {}
