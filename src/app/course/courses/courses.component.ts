import { Course } from './../shared/course';
import { CourseService } from './../../core/services/course.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  courses : Course[];
  currentDate: string;

  ngOnInit() {
    this.currentDate = new Date().toLocaleDateString();
    this.courseService.getAll().subscribe(
      (courses:Course[]) => this.courses = courses
    );  
  }
  

}
