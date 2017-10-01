import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Kermon's app`;


  public doGood(): number {
    enum Books {
      John,
      Jim,
      Sally
    }
    function theFunction(num: number): string {
      return '';
    }
    let boy: Books = Books.Jim;
    let myFunction: (myVar: number) => string;
    myFunction = theFunction;
    myFunction = (num: number) =>  `blah {{num}}`;

    return 0;
  }
}
