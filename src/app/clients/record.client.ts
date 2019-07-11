import { Injectable } from '@angular/core';
import { TimeRecord } from '../models/time-record.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, mapTo, catchError } from 'rxjs/operators';

@Injectable()
export class RecordClient {
    private static URL = '//localhost:3000/records';

    constructor(private httpClient: HttpClient) { }

    public save(record: TimeRecord): Observable<TimeRecord> {
        return this.httpClient.post<TimeRecord>(RecordClient.URL, record);
    }

    public get(): Observable<TimeRecord[]> {
        return this.httpClient.get<TimeRecord[]>(RecordClient.URL);
    }
}