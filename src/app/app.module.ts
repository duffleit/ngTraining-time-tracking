import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTimeRecordComponent } from './components/create-time-record/create-time-record.component';
import { TimeRecordComponent } from './components/time-record/time-record.component';
import { HttpRecordClient } from './clients/record.client';
import { HoursDirective } from './components/create-time-record/hours.directive';
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
    { provide: API_ENDPOINT, useValue: 'http://hukcobrug.com' },
    { provide: RECORD_CLIENT, useClass: environment.mocked ? MockRecordClient : HttpRecordClient }
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
