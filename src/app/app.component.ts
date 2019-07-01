import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Solution';

  onTitleClick(e: string) {
    console.log('onTitleClick', e);
    this.title += e;
  }
}
