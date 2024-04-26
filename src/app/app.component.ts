import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learning-center';
  options = [
    { path: '/home', title: 'Home'},
    { path: '/learning/students', title: 'Students'},
    { path: '/learning/courses', title: 'Courses'},
    { path: '/learning/users', title: 'Users'},
    {path:'/about', title: 'About'}
  ]
}
