import { InjectionToken } from '@angular/core';
import { TimeRecord } from './models/time-record.model';
import { Observable } from 'rxjs';

export const RECORD_CLIENT = new InjectionToken('RECORD_SERVICE');

export interface RecordClient {
    save(record: TimeRecord): Observable<TimeRecord>;
    getAll(): Observable<TimeRecord[]>;
    get(id: number): Observable<TimeRecord>;
    delete(id: number): Observable<void>;
}