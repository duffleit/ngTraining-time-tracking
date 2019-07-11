import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TimeRecord } from '../../models/time-record.model';

@Component({
  selector: 'app-create-time-record',
  templateUrl: './create-time-record.component.html',
  styleUrls: ['./create-time-record.component.scss']
})
export class CreateTimeRecordComponent {
  @Output()
  public create: EventEmitter<TimeRecord> = new EventEmitter<TimeRecord>();

  public hours = '';
  public description = '';

  public clickedButton(): void {
    const splittedHours = this.hours.split(':');
    const hours = parseInt(splittedHours[0], 10);
    const minutes = hours * 60 + parseInt(splittedHours[1], 10);

    const newTimeRecord = { description: this.description, minutes };
    this.create.emit(newTimeRecord);
  }
}
