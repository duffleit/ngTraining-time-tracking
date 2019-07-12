import { Component, OnInit, Input, Inject } from '@angular/core';
import { TimeRecord } from 'src/app/models/time-record.model';
import { RecordClient, RECORD_CLIENT } from 'src/app/tokens';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input()
  public id: number;

  public timeRecord$: Observable<TimeRecord>;

  constructor(@Inject(RECORD_CLIENT) private recordClient: RecordClient) {

  }

  public ngOnInit(): void {
    this.timeRecord$ = this.recordClient.get(this.id);
  }

  public deleteRecord(): void {
    this.recordClient.delete(this.id).subscribe();
  }
}
