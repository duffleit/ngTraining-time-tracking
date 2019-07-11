import { Component } from '@angular/core';
import { TimeRecord } from './models/time-record.model';
import { RecordClient } from './clients/record.client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private recordClient: RecordClient) {}

  public records: TimeRecord[] = [
    { hours: '5', description: 'mathe-hü' },
    { hours: '3', description: 'hund gasse' },
    { hours: '2', description: 'gitarre' },
  ];

  public addRecord(record: TimeRecord): void {
    // this.records.push(record);
    this.recordClient.save(record);
  }
}
