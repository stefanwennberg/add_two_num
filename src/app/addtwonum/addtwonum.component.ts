
import {  Component,   OnInit  } from '@angular/core';

  @Component({
      selector:  'app-app-addtwonum',
      templateUrl:  './addtwonum.component.html',
      styleUrls:  ['./addtwonum.component.css']
  })
  export class AddtwonumComponent {
      ans =  0;
      add(no1,  no2) {
          this.ans =  parseInt(no1, 10) + parseInt(no2, 10);
      }
  }
