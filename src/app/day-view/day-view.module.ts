import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// import { MbscModule } from '@mobiscroll/angular';
import { IonicModule } from '@ionic/angular';

import { DayViewPage } from './day-view.page';

const routes: Routes = [
  {
    path: '',
    component: DayViewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    // MbscModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DayViewPage]
})
export class DayViewPageModule {}
