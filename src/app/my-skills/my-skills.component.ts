import { Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

const SKILLS = [
  { label: 'HTML', icon: 'html' },
  { label: 'CSS', icon: 'css' },
  { label: 'JavaScript', icon: 'javascript' },
  { label: 'TypeScript', icon: 'typescript' },
  { label: 'Angular', icon: 'angular' },
  { label: 'Firebase', icon: 'firebase' },
  { label: 'Git', icon: 'git' },
  { label: 'Res Api', icon: 'rest_api' },
  { label: 'Scrum', icon: 'scrum' },
  { label: 'Material Design', icon: 'material_design' },
] as const;

@Component({
  selector: 'app-my-skills',
  imports: [TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  protected readonly skills = SKILLS;
  protected readonly isHovered = signal(false);

  protected scrollToContactSection(): void {
    document
      .getElementById('contact-section')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
}
