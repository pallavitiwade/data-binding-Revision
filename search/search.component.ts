import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private _search:SearchService
  ) { }

  ngOnInit(): void {
  }

  onSearch(event:any){
    const value=event.target.value;

this._search.sendSearchText(value);

  }



}
