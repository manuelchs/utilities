import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styles: []
})
export class NewUserComponent implements OnInit {
  id: string;
  constructor(private activatedRouter: ActivatedRoute) {
    this.activatedRouter.parent.params.subscribe(params => {
      console.log('Ruta hija');
      console.log(params);
      this.id = params['id'];
    });
  }

  ngOnInit() {
  }

}
