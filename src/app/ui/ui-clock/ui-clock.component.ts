import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'ui-clock',
  template: `
  <div class="clock-component">
        <div class="time">{{ rxTime | date: 'MMMM dd yyyy, EEEE, hh:mm:ss a' }}</div>
  </div>
  `,
  styleUrls: ['./ui-clock.component.scss'],
})
export class UIClockComponent implements OnInit, OnDestroy {
  time = new Date();
  rxTime = new Date();
  intervalId: string | number | NodeJS.Timer | undefined;
  subscription: Subscription = new Subscription;

  ngOnInit() {
    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe((time) => {
        this.rxTime = time;
      });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
