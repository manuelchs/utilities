import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styles: []
})
export class DetailUserComponent implements OnInit {

  id: string;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.parent.params.subscribe(params => {
      console.log('Ruta hija');
      console.log(params);
      this.id = params['id'];
    });
  }

  ngOnInit() {
  }

}
