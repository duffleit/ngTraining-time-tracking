import { Component, Input, OnInit } from '@angular/core';
import { TimeRecord } from './models/time-record.model';
import { RecordClient } from './clients/record.client';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public loadingState: { loadRecords: boolean, saveRecord: boolean } =
    { loadRecords: true, saveRecord: false };

  public records: TimeRecord[] = [];

  constructor(private recordClient: RecordClient) { }

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
