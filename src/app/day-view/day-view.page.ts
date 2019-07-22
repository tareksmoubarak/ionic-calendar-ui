// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { MbscEventcalendarOptions } from '@mobiscroll/angular';
// import { HttpClient } from '@angular/common/http';
// @Component({
//   selector: 'app-day-view',
//   templateUrl: './day-view.page.html',
//   styleUrls: ['./day-view.page.scss'],
// })
// export class DayViewPage implements OnInit {

//   constructor(private http: HttpClient) {}

//     events: any;

//     eventSettings: MbscEventcalendarOptions = {
//         display: 'inline',
//         view: {
//             calendar: { type: 'week' },
//             eventList: { type: 'day' }
//         }
//     };

//     ngOnInit() {
//         this.http.jsonp('https://trial.mobiscroll.com/events/', 'callback').subscribe((resp: any) => {
//             this.events = resp;
//         });
//     }

// }
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.page.html',
  styleUrls: ['./day-view.page.scss'],
})
export class DayViewPage implements OnInit {

  constructor() {}
  
  ngOnInit(){
    console.log(this.daysInMonth(7, 2019));
  }

  public daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
  }
}