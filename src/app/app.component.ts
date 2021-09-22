import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  ScrollIntoView(elem: string) {
    console.log(elem);
    document.querySelector(elem).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'end',
    });
  }
}
