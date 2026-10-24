import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const FORM_ENDPOINT = 'https://formspree.io/f/xqeywbok';
const SUCCESS_POPUP_MS = 4000;
const ERROR_POPUP_MS = 5000;

interface ContactData {
  name: string;
  email: string;
  message: string;
  privacy: boolean;
}

@Component({
  selector: 'app-contact-me',
  imports: [TranslateModule, FormsModule, RouterLink],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  private readonly http = inject(HttpClient);

  protected contactData: ContactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  protected readonly showPopup = signal(false);
  protected readonly isErrorPopup = signal(false);

  /** Set to `true` to skip the real request and only show the success popup. */
  private readonly mailTest = false;

  protected onPrivacyChange(privacyControl: NgModel): void {
    privacyControl.control.markAsTouched();
  }

  protected onSubmit(ngForm: NgForm): void {
    if (!ngForm.submitted || !ngForm.form.valid) {
      return;
    }

    if (this.mailTest) {
      this.handleSuccess(ngForm);
      return;
    }

    this.http
      .post(FORM_ENDPOINT, this.contactData, {
        headers: { Accept: 'application/json' },
      })
      .subscribe({
        next: () => this.handleSuccess(ngForm),
        error: () => this.openPopup(true, ERROR_POPUP_MS),
      });
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private handleSuccess(ngForm: NgForm): void {
    this.openPopup(false, SUCCESS_POPUP_MS);
    ngForm.resetForm();
    ngForm.controls['privacy']?.markAsUntouched();
  }

  private openPopup(isError: boolean, durationMs: number): void {
    this.isErrorPopup.set(isError);
    this.showPopup.set(true);
    setTimeout(() => this.showPopup.set(false), durationMs);
  }
}
