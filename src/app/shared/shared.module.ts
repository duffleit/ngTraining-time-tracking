import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoursPipe } from './hours.pipe';

@NgModule({
  declarations: [
    HoursPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HoursPipe
  ]
})
export class SharedModule { }
