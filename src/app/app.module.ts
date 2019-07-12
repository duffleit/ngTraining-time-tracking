import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpRecordClient } from './clients/record.client';
import { RECORD_CLIENT } from './tokens';
import { environment } from 'src/environments/environment.prod';
import { MockRecordClient } from './clients/record.client.mock';
import { OverviewModule } from './overview/overview.module';
import { DetailsModule } from './details/details.module';
import { CustomPreloadingStrategy } from './preoloading.strategy';

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [
    CustomPreloadingStrategy,
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
