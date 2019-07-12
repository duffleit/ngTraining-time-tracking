import { Component, OnInit, Input, Inject } from '@angular/core';
import { TimeRecord } from 'src/app/models/time-record.model';
import { RecordClient, RECORD_CLIENT } from 'src/app/tokens';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'
import { map, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public id: number;
  public timeRecord$: Observable<TimeRecord>;

  constructor(
    @Inject(RECORD_CLIENT) private recordClient: RecordClient,
    private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.timeRecord$ = this.activatedRoute.params.pipe(
      map(paramsMap => paramsMap.id),
      tap(id => { this.id = id; }),
      mergeMap(id => this.recordClient.get(id)),
    );
  }

  public deleteRecord(): void {
    this.recordClient.delete(this.id).subscribe();
  }
}
