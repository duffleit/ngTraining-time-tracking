import { Component, OnInit, Input } from '@angular/core';
import { TimeRecord } from '../../../models/time-record.model';

@Component({
  selector: 'app-time-record',
  templateUrl: './time-record.component.html',
  styleUrls: ['./time-record.component.scss']
})
export class TimeRecordComponent {
  @Input()
  public record: TimeRecord;
}
