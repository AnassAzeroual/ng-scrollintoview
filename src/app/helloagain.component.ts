import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'hello-again',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; height:500px;padding-top: 50px; background-color:#aaf2ca }`]
})
export class HelloAgainComponent  {
  @Input() name: string;

}
