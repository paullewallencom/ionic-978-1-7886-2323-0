import { Component } from '@angular/core';

@Component({
  selector: 'my-component',
  templateUrl: 'my-component.html'
})
export class MyComponent {

  text: string;

  constructor() {
    console.log('Hello MyComponent Component');
    this.text = 'Hello World';
  }

}
