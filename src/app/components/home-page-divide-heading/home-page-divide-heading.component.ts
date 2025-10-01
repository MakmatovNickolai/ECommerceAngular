import { Component, Input, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-divide-heading',
  standalone: true,
  imports: [],
  templateUrl: './home-page-divide-heading.component.html',
  styleUrl: './home-page-divide-heading.component.scss'
})
export class HomePageDivideHeadingComponent implements OnInit {
  @Input() message: string = '';
  @Input() heading: string = '';
  @Input() showButtons: boolean = false;
  @Input() showTime: boolean = false;
  @Input() showViewButton: boolean = false;

  private time?: Date;

  timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  private intervalId?: any;
  
  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    const date = new Date();
    date.setDate(date.getDate() + 3);
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
