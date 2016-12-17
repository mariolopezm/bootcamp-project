import { CoursesComponent } from './course/courses/courses.component';
import { TeachersComponent } from './teacher/teachers/teachers.component';

import { CourseService } from './core/services/course.service';
import { TeacherService } from './core/services/teacher.service';
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
import { CourseComponent } from './course/course.component';
import { StartDateStatusDirective } from './shared/start-date-status.directive';
import { MyDateStatusDirective } from './course/shared/my-date-status.directive';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeWebApi } from './mock/fake-web-api.service';


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
    MyDateStatusDirective,
    MyDateStatusDirective
  ],
  imports: [
    DataTableModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(FakeWebApi),
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
