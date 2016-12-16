import { TeacherService } from './../core/services/teacher.service';

import { Teacher } from './shared/teacher';

import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teacherId: string;
  teacher: Teacher;

  constructor(private route: ActivatedRoute, private teacherService: TeacherService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => this.teacherId = params["id"]);
    if(this.teacherId === "new"){
      this.teacher = new Teacher(this.teacherService.getNextId());
    }
    else{
      this.teacher = this.teacherService.getById(this.teacherId);
    }
  }

  onSubmit() {
       /**
     * clone the object so the reset function does not delete the object properties. 
     * This is because the object is still referenced by ngModel.
     * We use Object.assing as it does not need the prototype properties. 
     * */
    let newTeacher: Teacher = Object.assign({}, this.teacher);
    if(this.teacherId === "new"){
      this.teacherService.insert(newTeacher);
    }
    else{
      this.teacherService.update(newTeacher);
    }
  }

}
