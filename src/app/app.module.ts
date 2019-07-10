import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTimeRecordComponent } from './create-time-record/create-time-record.component';
import { TimeRecordComponent } from './time-record/time-record.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTimeRecordComponent,
    TimeRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
