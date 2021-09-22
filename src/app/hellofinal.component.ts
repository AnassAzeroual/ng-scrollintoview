import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello-final',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; height:500px;padding-top: 50px; background-color:#aa89ff }`]
})
export class HelloFinalComponent  {
  @Input() name: string;
}
