import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public hours = '0';

  public inputChange(value: string): void {
    this.hours = value;
  }

  public clickedButton(): void {
    this.hours = 'delete';
  }
}
