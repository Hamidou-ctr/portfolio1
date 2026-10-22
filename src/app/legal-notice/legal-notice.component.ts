
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-legal-notice',
    imports: [TranslateModule],
    templateUrl: './legal-notice.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);  // Scrollt zum Seitenanfang
  }

  goBack() {
    this.location.back();
  }
}
