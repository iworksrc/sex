import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  constructor(
    element: ElementRef
  ) {
    setInterval(() => { // Inter-component communication
      let date = new Date();

      element.nativeElement
        .dispatchEvent(new CustomEvent(
          'time-stream',
          {
            detail: date,
            bubbles: true
          }))
    }, 1000)
  }

  ngOnInit() {
  }

}
