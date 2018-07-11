import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html'
})
export class NgClassComponent implements OnInit {
  alert: string;
  propieties: Object;
  loading: boolean;
  constructor() {
    this.alert = 'alert-info';
    this.propieties = {
      danger: false
    };
    this.loading = false;
  }

  ngOnInit() {
  }

  process() {
    this.loading = true;
    console.log(this.loading);
    setTimeout( () => {
      this.loading = false;
      console.log(this.loading);
    }, 3000);
  }

}
