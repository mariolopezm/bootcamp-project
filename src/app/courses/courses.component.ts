import { CourseService } from './../course/shared/course.service';
import { Course } from './../course/shared/course';
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
    this.courses = this.courseService.getAll();
  }
  

}
