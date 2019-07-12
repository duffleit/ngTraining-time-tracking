import { Component, OnInit, Inject } from '@angular/core';
import { TimeRecord } from 'src/app/models/time-record.model';
import { RECORD_CLIENT, RecordClient } from 'src/app/tokens';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public loadingState: { loadRecords: boolean, saveRecord: boolean } =
    { loadRecords: true, saveRecord: false };

  public records: TimeRecord[] = [];

  constructor(
    @Inject(RECORD_CLIENT) private recordClient: RecordClient,
  ) {
  }

  public ngOnInit(): void {
    this.recordClient.getAll()
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
