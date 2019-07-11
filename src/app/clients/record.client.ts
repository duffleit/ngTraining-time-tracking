import { Injectable } from '@angular/core';
import { TimeRecord } from '../models/time-record.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecordClient {
    constructor(private httpClient: HttpClient) { }

    public save(record: TimeRecord): void {
        this.httpClient.post('//localhost:3000/records', record).subscribe();
    }
}