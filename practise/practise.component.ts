import { Component, OnInit } from '@angular/core';
import { cardService } from '../services/card';
import { Icard } from '../Models/card';
import { SearchService } from '../services/search';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.scss']
})
export class PractiseComponent implements OnInit {

posts:any[]=[];
filter:any[]=[]

searchValue:string='';

  constructor(
private _card:cardService,
    private _search:SearchService


  ) { }

  ngOnInit(): void {
    this.posts=this._card.getposts()
    this.filter=this.posts
    console.log(this.posts)

    this._search.search$.subscribe(searchText=>{
      const search=searchText.toLowerCase().trim()

      if(search === ''){
        this.filter=this.posts
        return;
      }
      this.filter=this.posts.filter(item=>item.content.toLowerCase().includes(search))
    })
   
  }

  // searchCard(event:any):void{
  //   const searchValue=event.target.value.toLowerCase().trim()
  //   console.log(searchValue)

  //   if(searchValue === ''){
  //     this.filter=this.posts;
  //     return;
  //   }
  //   this.filter=this.posts.filter(card=>card.content.toLowerCase().includes(searchValue)

  //   );
  //   console.log('matching cards:',this.filter)

  // }



 }


