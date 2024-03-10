import { Injectable, Sanitizer } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SanitizeService {


  constructor(
    private sanitizer: Sanitizer,
    private domSanitizer: DomSanitizer,
    private firestore: FirebaseService
  ) {}

  domHTML(html: string) {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }
}
