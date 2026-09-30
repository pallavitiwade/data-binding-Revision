import { Component, OnInit } from '@angular/core';
import { cardService } from '../services/card';
import { Icard } from '../Models/card';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
// username:string='pallavi'
// age:number=30
// lastname:string='tiwade'
// name:string='';
// gender='';
// selectcity='';

// user={
//   name:'',
//   email:'',
//   age:0
// }


// posts:Icard[]=[]


  constructor(
    private _card:cardService
  ) { }

  ngOnInit(): void {

    //.posts=this._card.getposts();

    
  }

//   price=100;
//   quantity=3;

// imageurl='https://images.unsplash.com/photo-1783818412483-d1e904fca110?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D'
// isDisabled=true
// isActive=false
// textcolor='blue';
// // message='';
// enter=''


// showmessage(){
//   this.message='button clicked'

// }

// getValue(event:any){
//   this.enter=event.target.value;

// }



// fruits = [
//   {
//     id: 1,
//     name: 'Apple',
//     price: 100,
//     quantity: 1
//   },
//   {
//     id: 2,
//     name: 'Mango',
//     price: 150,
//     quantity: 1
//   },
//   {
//     id: 3,
//     name: 'Orange',
//     price: 80,
//     quantity: 1
//   }


// ];
//   searchT='';
// items = [
//   {
//     name: 'Cappuccino',
//     price: 169
//   },
//   {
//     name: 'Cold Coffee',
//     price: 159
//   },
//   {
//     name: 'Mocha',
//     price: 189
//   }
// ];


// get filter(){
//   return this.items.filter(item=>
//     item.name.toLowerCase().includes(this.searchT.toLowerCase())
//   )

// }

username='';
message='';

showName(){
  this.message=`welcome ${this.username}`
}
searchT='';
search(value:string){
  console.log(value)
}






}
