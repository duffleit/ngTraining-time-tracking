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

    public getAll(): Observable<TimeRecord[]> {
        return of([
            { minutes: 120, description: 'mathe hü' },
            { minutes: 240, description: 'französisch hü' },
        ]);
    }

    public get(id: number): Observable<TimeRecord> {
        return of({ minutes: 120, description: 'mathe hü' });
    }

    public delete(id: number): Observable<void> {
        return of();
    }
}