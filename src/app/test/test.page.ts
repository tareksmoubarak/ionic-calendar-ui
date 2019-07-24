import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  @ViewChild('courseDescriptionSlides') slides;
  @ViewChild('segment') segment;
  
  public dates = new Array();
  public selectedMonth;
  public selectedDate;
  public events = [
    {
      title: 'Genius research zone - Sarah Khoury',
      startTime: '9',
      endTime: '10',
      background: 'orange'
    },
    {
      title: 'Genius research zone - Sarah Khoury',
      startTime: '12',
      endTime: '13',
      background: 'yellow'
    },
    {
      title: 'Genius research zone - Sarah Khoury',
      startTime: '13',
      endTime: '14',
      background: 'green'
    },
    {
      title: 'Genius research zone - Sarah Khoury',
      startTime: '16',
      endTime: '17.5',
      background: 'red'
    }
  ];
  public slot1 = {title: '', height: 50, background: 'transparent'}; //9AM
  public slot2 = {title: '', height: 50, background: 'transparent'};
  public slot3 = {title: '', height: 50, background: 'transparent'};
  public slot4 = {title: '', height: 50, background: 'transparent'};
  public slot5 = {title: '', height: 50, background: 'transparent'};
  public slot6 = {title: '', height: 50, background: 'transparent'};
  public slot7 = {title: '', height: 50, background: 'transparent'};
  public slot8 = {title: '', height: 50, background: 'transparent'};
  public slot9 = {title: '', height: 50, background: 'transparent'};
  public slot10 = {title: '', height: 50, background: 'transparent'};
  public slot11 = {title: '', height: 50, background: 'transparent'};
  public slot12 = {title: '', height: 50, background: 'transparent'};
  public slot13 = {title: '', height: 50, background: 'transparent'}; //9PM
  constructor(public route: ActivatedRoute) {
    this.initDaysInMonth();
    this.events.forEach((e: any) => {
      switch (e.startTime){
        case '9': {
          let height = (e.endTime - e.startTime) * 50;
          this.slot1 = {title: e.title, height: height, background: e.background};
          break;
        }
        case '10': {
          let height = (e.endTime - e.startTime) * 50;
          this.slot2 = {title: e.title, height: height, background: e.background};
          break;
        }
        case '11': {
          let height = (e.endTime - e.startTime) * 50;
          this.slot3 = {title: e.title, height: height, background: e.background};
          break;
        }
        case '12': {
          let height = (e.endTime - e.startTime) * 50;
          this.slot4 = {title: e.title, height: height, background: e.background};
          break;
        }
        case '13': {
          let height = (e.endTime - e.startTime) * 50;
          this.slot5 = {title: e.title, height: height, background: e.background};
          break;
        }
        case '14': {
          let height = (e.endTime - e.startTime) * 50;
          this.slot6 = {title: e.title, height: height, background: e.background};
          break;
        }
        case '15': {
          let height = (e.endTime - e.startTime) * 50;
          this.slot7 = {title: e.title, height: height, background: e.background};
          break;
        }
        case '16': {
          let height = (e.endTime - e.startTime) * 50;
          this.slot8 = {title: e.title, height: height, background: e.background};
          break;
        }
        case '17': {
          let height = (e.endTime - e.startTime) * 50;
          this.slot9 = {title: e.title, height: height, background: e.background};
          break;
        }
        case '18': {
          let height = (e.endTime - e.startTime) * 50;
          this.slot10 = {title: e.title, height: height, background: e.background};
          break;
        }
        case '19': {
          let height = (e.endTime - e.startTime) * 50;
          this.slot11 = {title: e.title, height: height, background: e.background};
          break;
        }
        case '20': {
          let height = (e.endTime - e.startTime) * 50;
          this.slot12 = {title: e.title, height: height, background: e.background};
          break;
        }
        case '21': {
          let height = (e.endTime - e.startTime) * 50;
          this.slot13 = {title: e.title, height: height, background: e.background};
          break;
        }

      }
    });
  }

  ngOnInit() {
    // console.log(document.getElementById('container').offsetHeight);
  }

  public initDaysInMonth() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

    this.route.queryParams.subscribe(params => {
      let date = new Date(params.selectedDate);
      let daysInMonth = this.daysInMonth(date.getMonth() + 1, date.getFullYear());
      for (let i = 1; i <= daysInMonth; i++) {
        let t = (date.getMonth() + 1) + '/' + i + '/' + date.getFullYear();
        let tarek = new Date(t);
        if (dayNames[tarek.getDay() - 1] == undefined) {
          this.dates.push({
            day: i,
            name: 'Su'
          });
        } else {
          this.dates.push({
            day: i,
            name: dayNames[tarek.getDay() - 1]
          });
        }
      }
      this.selectedMonth = monthNames[date.getMonth()];
      this.selectedDate = date.getDate() - 1;
      //default events given
      // const events = [ {start: 0, end: 80} , {start: 120, end: 160}, {start: 460, end: 500} ];
      // this.layOutDay(events);
    });
  }

  public daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  public onSegmentChange(ev) {
    this.slides.slideTo(ev.detail.value);
  }

  public slideTo(index) {
    this.slides.slideTo(index);
  }

  // // On Slide change update segment to the matching value
  async onSlideDidChange(ev) {
    const index = await this.slides.getActiveIndex();
    this.clickSegment(index);
  }

  public clickSegment(index) {
    this.segment.value = index;
  }

  // public createEvent (height, top, left, units) {
  //   let node = document.createElement("DIV");
  //   node.className = "event";
  //   node.innerHTML = 
  //   "<span class='title'> Sample Item </span> \
  //   <br><span class='location'> Sample Location </span>";
    
  //   node.style.height = height + "px";
  //   node.style.top = top + "px";
  //   node.style.left = 0 + left + "px";
  //   node.style.position = "absolute";
  //   node.style.backgroundColor = "red";

  //   document.getElementsByClassName("events")[0].appendChild(node);
  // }
  
  // public layOutDay(events) {
  // let myNode = document.getElementsByClassName("events")[0];
  // myNode.innerHTML = '';
  
  //   events.forEach((event, id) => {
  //     let height = event.end - event.start;
  //     let top = event.start;
  //     let left = 0;
  //     let units = 0;
  //     this.createEvent(height, top, left, units);
  //   });
  // }
}
