import { TeacherService } from './../core/services/teacher.service';
import { CourseService } from './../core/services/course.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Course } from './shared/course';
import { Teacher } from './../teacher/shared/Teacher';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseId: string;
  course: Course;
  teachers: Teacher[];

  constructor(private route: ActivatedRoute, private courseService: CourseService, private teacherService: TeacherService) { }

  ngOnInit() {
    this.teachers = this.teacherService.getAll();
    this.route.params.forEach((params: Params) => this.courseId = params["id"]);
    if(this.courseId === "new"){
      this.course = new Course(this.courseService.getNextId());
    }
    else{
      this.course = this.courseService.getById(this.courseId);
    }
  }

  onSubmit() {
    /**
   * clone the object so the reset function does not delete the object properties. 
   * This is because the object is still referenced by ngModel.
   * We use Object.assing as it does not need the prototype properties. 
   * */
    let newCourse: Course = Object.assign({}, this.course);
    if(this.courseId === "new"){
      this.courseService.insert(newCourse);
    }
    else{
      this.courseService.update(newCourse);
    }

  }
}
