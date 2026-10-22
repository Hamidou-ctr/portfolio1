
import { Component, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { service } from '../service/service.component';
import { TranslateModule } from '@ngx-translate/core';


@Component({
    selector: 'app-my-skills',
    imports: [TranslateModule],
    templateUrl: './my-skills.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  isHovered: boolean = false;

  constructor(private service: service) { }

  // Funktion zum Scrollen zur Referenzsektion
  //scrollToReference() {
  //this.service.scrollToReference(); // Trigger das Scrollen über den Service
  // }

  scrollToContactSection() {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
