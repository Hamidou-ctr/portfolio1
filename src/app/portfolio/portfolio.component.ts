
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-portfolio',
    imports: [ProjectComponent, TranslateModule],
    templateUrl: './portfolio.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
