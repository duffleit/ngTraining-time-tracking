import { InjectionToken } from '@angular/core';
import { TimeRecord } from './models/time-record.model';
import { Observable } from 'rxjs';

export const API_ENDPOINT = new InjectionToken('API_ENDPOINT');
export const RECORD_CLIENT = new InjectionToken('RECORD_SERVICE');

export interface RecordClient {
    save(record: TimeRecord): Observable<TimeRecord>;
    get(): Observable<TimeRecord[]>;
}