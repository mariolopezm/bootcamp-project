import { TeacherService } from './teacher/shared/teacher.service';
import { CourseService } from './course/shared/course.service';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'angular2-datatable';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeachersComponent } from './teachers/teachers.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { StartDateStatusDirective } from './shared/start-date-status.directive';
import { TeacherSelectListComponent } from './teacher/shared/teacher-select-list/teacher-select-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TeacherComponent,
    TeachersComponent,
    HomeComponent,
    CourseComponent,
    CoursesComponent,
    StartDateStatusDirective,
    TeacherSelectListComponent
  ],
  imports: [
    DataTableModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'teachers/:id',
        component: TeacherComponent
      },
      {
        path: 'teachers/new',
        component: TeacherComponent
      },
      {
        path: 'courses/:id',
        component: CourseComponent
      },
      {
        path: 'courses/new',
        component: CourseComponent
      },
      {
        path: 'teachers',
        component: TeachersComponent
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [TeacherService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
