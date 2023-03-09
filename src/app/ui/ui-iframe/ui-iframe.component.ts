import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'ui-iframe',
  template: `
  <!-- Use embed link for embedlink -->
  <iframe [src]="safeSrc" [width]="frameWidth" [height]="frameHeight" frameborder="0" webkitallowfullscreen mozallowfullscreen
      allowfullscreen></iframe>
  `,
  styleUrls: ['./ui-iframe.component.scss'],
})
export class UIIframeComponent {
  @Input() embedLink: string = "https://www.youtube.com/embed/vdNOmKphK-M";
  @Input() frameWidth: String = '420' ;
  @Input() frameHeight: String = '315' ;

  safeSrc: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    this.safeSrc = this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.embedLink);
  }

  ngOnInit() {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.embedLink);
  }
}

