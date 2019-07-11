import { Injectable } from '@angular/core';
import { TimeRecord } from '../models/time-record.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, mapTo, catchError } from 'rxjs/operators';
import { RecordClient } from '../tokens';

@Injectable()
export class MockRecordClient implements RecordClient {

    public save(record: TimeRecord): Observable<TimeRecord> {
        return of({ ...record });
    }

    public get(): Observable<TimeRecord[]> {
        return of([
            { hours: "2", description: "mathe hü" },
            { hours: "4", description: "französisch hü" },
        ]);
    }
}