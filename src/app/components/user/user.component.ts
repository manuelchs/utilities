import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  params: string;
  constructor(private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(params => {
      console.log('Ruta padre');
      console.log(params);
      this.params = params['id'];
    });
  }

  ngOnInit() {
  }

}
