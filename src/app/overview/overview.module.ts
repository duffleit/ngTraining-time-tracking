import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateTimeRecordComponent } from './components/create-time-record/create-time-record.component';
import { TimeRecordComponent } from './components/time-record/time-record.component';
import { HoursDirective } from './components/create-time-record/hours.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OverviewComponent,
    CreateTimeRecordComponent,
    TimeRecordComponent,
    HoursDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    OverviewComponent
  ]
})
export class OverviewModule { }
