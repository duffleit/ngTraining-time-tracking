import { Component, Input, OnInit, Inject } from '@angular/core';
import { TimeRecord } from './models/time-record.model';
import { RECORD_CLIENT, RecordClient, API_ENDPOINT } from './tokens';
import { HttpRecordClient } from './clients/record.client';
import { MockRecordClient } from './clients/record.client.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public loadingState: { loadRecords: boolean, saveRecord: boolean } =
    { loadRecords: true, saveRecord: false };

  public records: TimeRecord[] = [];

  constructor(
    @Inject(API_ENDPOINT) private endpoint: string,
    @Inject(RECORD_CLIENT) private recordClient: RecordClient,
  ) {
    console.log(endpoint);
  }

  public ngOnInit(): void {
    this.recordClient.get()
      .subscribe(rs => {
        this.records = rs;
        this.loadingState.loadRecords = false;
      }, e => {
        console.log(e);
        this.loadingState.loadRecords = false;
      });
  }

  public addRecord(record: TimeRecord): void {
    this.loadingState.saveRecord = true;
    this.recordClient.save(record)
      .subscribe(r => {
        this.records.push(r);
        this.loadingState.saveRecord = false;
      }, e => {
        console.log(e);
        this.loadingState.saveRecord = false;
      });
  }
}
