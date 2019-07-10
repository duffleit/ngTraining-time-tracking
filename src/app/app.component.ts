import { Component } from '@angular/core';
import { TimeRecord } from './models/time-record.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public records: TimeRecord[] = [
    { hours: '5', description: 'mathe-hü' },
    { hours: '3', description: 'hund gasse' },
    { hours: '2', description: 'gitarre' },
  ];

  public addRecord(record: TimeRecord): void {
    this.records.push(record);
  }
}
