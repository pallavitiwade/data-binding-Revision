import { Injectable } from "@angular/core";
import { Istudent } from "../Models/student";


@Injectable({
    providedIn:'root'
})

export class studentService{
    students:Array<Istudent> = [
  {
    id: 1,
    name: 'Rahul Sharma',
    age: 21,
    course: 'Angular',
    city: 'Pune',
    marks: 85
  },
  {
    id: 2,
    name: 'Priya Patil',
    age: 22,
    course: 'JavaScript',
    city: 'Mumbai',
    marks: 92
  },
  {
    id: 3,
    name: 'Amit Joshi',
    age: 20,
    course: 'React',
    city: 'Nagpur',
    marks: 78
  },
  {
    id: 4,
    name: 'Sneha Kulkarni',
    age: 21,
    course: 'Angular',
    city: 'Nashik',
    marks: 88
  },
  {
    id: 5,
    name: 'Rohit Deshmukh',
    age: 23,
    course: 'Node.js',
    city: 'Pune',
    marks: 74
  },
  {
    id: 6,
    name: 'Neha Patil',
    age: 20,
    course: 'HTML & CSS',
    city: 'Aurangabad',
    marks: 95
  },
  {
    id: 7,
    name: 'Vikas More',
    age: 22,
    course: 'MongoDB',
    city: 'Kolhapur',
    marks: 81
  },
  {
    id: 8,
    name: 'Pooja Shinde',
    age: 21,
    course: 'TypeScript',
    city: 'Satara',
    marks: 89
  }
];

getstudent(){
    return this.students;
}
}