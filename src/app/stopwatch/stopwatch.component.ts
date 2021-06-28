import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {
  constructor() {
    console.log(this.builtInTenthSecondInterval$);
  }

  ngOnInit(): void {
    //
  }

  manualTenthSecondInterval$ = new Observable(observer => {
    let counter = 0;
    observer.next(counter);

    const interval = setInterval(() => {
      counter++;
      observer.next(counter);
    }, 100);
    return function unsubscribe() { clearInterval(interval) };
  })

  builtInTenthSecondInterval$ = interval(100);

}
