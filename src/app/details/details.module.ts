import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: DetailComponent }
    ]),
    CommonModule,
    SharedModule
  ],
})
export class DetailsModule { }
