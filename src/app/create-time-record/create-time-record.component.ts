import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-time-record',
  templateUrl: './create-time-record.component.html',
  styleUrls: ['./create-time-record.component.scss']
})
export class CreateTimeRecordComponent {
  public hours = '1';
  public description = '';

  public clickedButton(): void {
    this.hours = 'delete';
  }

  public get buttonIsDisabled(): boolean {
    return !parseInt(this.hours, 10);
  }
}
