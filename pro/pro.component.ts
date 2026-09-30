import { Component, OnInit } from '@angular/core';
import { Istudent } from '../Models/student';
import { studentService } from '../services/student';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.scss']
})
export class ProComponent implements OnInit {

  students:Istudent[]=[]
  constructor(
    private _std:studentService
  ) { }


  ngOnInit(): void {
   this.getstd()
    
  }

  getstd(){
    this.students=this._std.getstudent();
  }

}
