import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTimeRecordComponent } from './overview/components/create-time-record/create-time-record.component';
import { TimeRecordComponent } from './overview/components/time-record/time-record.component';
import { HttpRecordClient } from './clients/record.client';
import { HoursDirective } from './overview/components/create-time-record/hours.directive';
import { RECORD_CLIENT, API_ENDPOINT } from './tokens';
import { environment } from 'src/environments/environment.prod';
import { MockRecordClient } from './clients/record.client.mock';

@NgModule({
  declarations: [
    AppComponent,
    CreateTimeRecordComponent,
    TimeRecordComponent,
    HoursDirective
  ],
  providers: [
    { provide: RECORD_CLIENT, useClass: environment.mocked ? MockRecordClient : HttpRecordClient }
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
