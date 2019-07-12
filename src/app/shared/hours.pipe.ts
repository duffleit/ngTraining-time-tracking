import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'hours'
})
export class HoursPipe implements PipeTransform {
    public transform(value: any): string {
        const minutesSum = parseInt(value, 10);

        if (!minutesSum) { return ''; }

        const hours = Math.floor(minutesSum / 60);
        const minutes = minutesSum % 60;

        return hours + 'h ' + minutes + 'm';
    }
}