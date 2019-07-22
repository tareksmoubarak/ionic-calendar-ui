import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  public dates = new Array();
  constructor(public route: ActivatedRoute) { 
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      const dayNames = ["Mo", "Tu", "We", "Th", "Fr", "Sa","Su"];
    this.route.queryParams.subscribe(params => {
      let date = new Date(params.selectedDate);
      // console.log("The current month is " + monthNames[date.getMonth()]);
      // console.log("The current day is " + dayNames[date.getDay() - 1]);
      let daysInMonth = this.daysInMonth(date.getMonth() + 1, date.getFullYear());
      for (let i = 1; i <= daysInMonth; i++) {
        let t = (date.getMonth() + 1) + '/' + i + '/' + date.getFullYear();
        let tarek = new Date (t);
        if (dayNames[tarek.getDay() - 1] == undefined){
          this.dates.push({day: i, name: 'Su'});
        } else {
          this.dates.push({day: i, name: dayNames[tarek.getDay() - 1]});
        }
      }
      // console.log(this.dates);
    });
  }

  ngOnInit(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    // console.log("The current month is " + monthNames[d.getMonth()]);
  }

  public daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
  }
}
