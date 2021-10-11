import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Menu } from '../../classes/menu'; 

@Component({
  selector: 'app-table-menu',
  templateUrl: './table-menu.component.html',
  styleUrls: ['./table-menu.component.css'],
  providers: [ApiService],
})
export class TableMenuComponent implements OnInit {

  constructor(private _ApiService: ApiService){ }

  lstmenu:Menu[];

  ngOnInit(): void {
    this._ApiService.getmenu().subscribe(
      data => {
        this.lstmenu = data; 
      }
    );
  }
}
