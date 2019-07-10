import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TimeRecord } from '../models/time-record.model';

@Component({
  selector: 'app-create-time-record',
  templateUrl: './create-time-record.component.html',
  styleUrls: ['./create-time-record.component.scss']
})
export class CreateTimeRecordComponent {
  @Output()
  public create: EventEmitter<TimeRecord> = new EventEmitter<TimeRecord>();

  public hours = '1';
  public description = '';

  public clickedButton(): void {
    const newTimeRecord = { description: this.description, hours: this.hours };
    this.create.emit(newTimeRecord);
  }

  public get buttonIsDisabled(): boolean {
    return !parseInt(this.hours, 10);
  }
}
