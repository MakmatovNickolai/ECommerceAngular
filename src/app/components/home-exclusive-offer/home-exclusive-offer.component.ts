import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-exclusive-offer',
  standalone: true,
  imports: [],
  templateUrl: './home-exclusive-offer.component.html',
  styleUrl: './home-exclusive-offer.component.scss'
})
export class HomeExclusiveOfferComponent implements OnInit {
  private time?: Date;
  
  timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  private intervalId?: any;
  
  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    const date = new Date();
    date.setDate(date.getDate() + 2);
    this.time = date;
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.calculateTimeLeft();
        });
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private calculateTimeLeft() {
    if (!this.time) return;

    const now = Date.now();
    let distance = this.time.getTime() - now;

    if (distance <= 0) {
      clearInterval(this.intervalId);
      distance = 0;
    }

    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    this.timeLeft.days = Math.floor(distance / DAY);
    this.timeLeft.hours = Math.floor((distance % DAY) / HOUR);
    this.timeLeft.minutes = Math.floor((distance % HOUR) / MINUTE);
    this.timeLeft.seconds = Math.floor((distance % MINUTE) / SECOND);
  }
}
