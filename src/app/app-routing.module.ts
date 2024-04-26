import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {AboutComponent} from "./public/pages/about/about.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {StudentManagementComponent} from "./learning/pages/student-management/student-management.component";
import {CourseManagementComponent} from "./learning/pages/course-management/course-management.component";
import {UserManagementComponent} from "./learning/pages/user-management/user-management.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'learning/students', component: StudentManagementComponent },
  { path: 'learning/courses', component: CourseManagementComponent },
  { path: 'learning/users', component: UserManagementComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
