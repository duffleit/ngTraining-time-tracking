import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTimeRecordComponent } from './components/create-time-record/create-time-record.component';
import { TimeRecordComponent } from './components/time-record/time-record.component';
import { RecordClient } from './clients/record.client';

@NgModule({
  declarations: [
    AppComponent,
    CreateTimeRecordComponent,
    TimeRecordComponent
  ],
  providers: [
    RecordClient
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
