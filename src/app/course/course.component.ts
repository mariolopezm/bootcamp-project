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
    this.teacherService.getAll().subscribe(
      (teachers:Teacher[]) => this.teachers = teachers
    );  
    this.route.params.forEach((params: Params) => this.courseId = params["id"]);
    if(this.courseId === "new"){
      this.course = new Course(null);
    }
    else{
      this.courseService.getById(this.courseId).subscribe(
        (course:Course) => this.course = course
      );
    }
  }

  onSubmit() {
    if(this.courseId === "new"){
      this.courseService.insert(this.course).subscribe
        (x => this.showMessage(x.name + " created"));
    }
    else{
      this.courseService.update(this.course).subscribe
        (x => this.showMessage(x.name + " updated"));;
    }
  }

  showMessage(message: string){
    alert("Course " + message);
  }
}
