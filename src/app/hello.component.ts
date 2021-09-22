import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; height:500px; padding-top: 50px; background-color:#fe99ae }`]
})
export class HelloComponent  {
  @Input() name: string;
}
