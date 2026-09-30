import { Injectable } from "@angular/core";
import { Icard } from "../Models/card";



@Injectable({
    providedIn:'root'
})

export class cardService{


posts:Array<Icard>= [
  {
    id: 1,
    content: 'Angular Basics',
    body: 'Angular is a TypeScript-based framework used to build dynamic web applications.'
  },
  {
    id: 2,
    content: 'Components',
    body: 'Components are the building blocks of an Angular application.'
  },
  {
    id: 3,
    content: 'Data Binding',
    body: 'Data binding is used to connect component data with the HTML template.'
  },
  {
    id: 4,
    content: 'Directives',
    body: 'Directives allow you to add behavior and modify the structure of HTML elements.'
  },
  {
    id: 5,
    content: 'Services',
    body: 'Services are used to share data and functionality between different components.'
  },
  {
    id: 6,
    content: 'Routing',
    body: 'Angular Routing allows users to navigate between different views or pages.'
  },
  {
    id: 7,
    content: 'Reactive Forms',
    body: 'Reactive Forms provide a programmatic way to create and validate forms.'
  },
  {
    id: 8,
    content: 'HTTP Client',
    body: 'HttpClient is used to communicate with backend APIs and fetch or send data.'
  },
  {
    id: 9,
    content: 'Observables',
    body: 'Observables handle asynchronous data streams and are commonly used with HTTP requests.'
  },
  {
    id: 10,
    content: 'Dependency Injection',
    body: 'Dependency Injection allows Angular to provide required services to components and other classes.'
  }
];

getposts(){
    return this.posts;
}

}