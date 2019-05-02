import { Component, OnInit } from '@angular/core';
import { Categories } from '../classes/categories';
import { djangoApiService } from '../services/djangoApi.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _djangoApiService: djangoApiService){}

  listcategories:Categories[]

  ngOnInit() {
    this._djangoApiService.getcategories()
      .subscribe
      (
          data=>
          {
              this.listcategories = data;
          }
      );
  }

}
