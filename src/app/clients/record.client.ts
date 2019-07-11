import { Injectable } from '@angular/core';
import { TimeRecord } from '../models/time-record.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, mapTo, catchError } from 'rxjs/operators';
import { RecordClient } from '../tokens';

@Injectable()
export class HttpRecordClient implements RecordClient {
    private static URL = '//localhost:3000/records';

    constructor(private httpClient: HttpClient) { }

    public save(record: TimeRecord): Observable<TimeRecord> {
        return this.httpClient.post<TimeRecord>(HttpRecordClient.URL, record);
    }

    public get(): Observable<TimeRecord[]> {
        return this.httpClient.get<TimeRecord[]>(HttpRecordClient.URL);
    }
}