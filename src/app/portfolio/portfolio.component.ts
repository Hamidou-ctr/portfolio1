
import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-portfolio',
    imports: [ProjectComponent, TranslateModule],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
