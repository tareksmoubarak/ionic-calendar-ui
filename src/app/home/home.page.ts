import { Component, OnInit } from '@angular/core';
// import { CalendarComponentOptions } from 'ion2-calendar';

// import { ModalController, NavController } from '@ionic/angular';
import { CalendarComponentOptions } from 'ion2-calendar';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  // let _daysConfig: DayConfig[] = [];
    
  // for (let i = 0; i < 31; i++) {
  //   _daysConfig.push({
  //     date: new Date('24 July 2019'),
  //     marked: true,
  //     // disable: true,
  //     // cssClass: 'tetst'
  //   })
  // }
  optionsMulti: CalendarComponentOptions = {
    daysConfig: [{date: new Date('24 July 2019'), marked: true, cssClass: 'test'}]
  };
  constructor(public navCtrl: NavController) { 
    
  }
//   cssClass	string	''	separated by spaces
// date	Date	required	configured days
// marked	boolean	false	highlight color
// disable	boolean	false	disable
// title	string	none	displayed title eg: 'today'
// subTitle	string	none	subTitle subTitle eg: 'New Year\'s'
  
  ngOnInit() {
  }

  onChange($event) {
    let selectedDate = $event._d;
    this.navCtrl.navigateForward(['test'], { queryParams: { selectedDate: selectedDate }});
  }

}
