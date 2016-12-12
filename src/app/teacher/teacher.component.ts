import { TeacherService } from './shared/teacher.service';
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
    if(this.teacherId === "new"){
      this.teacherService.insert(this.teacher);
    }
    else{
      this.teacherService.update(this.teacher);
    }
  }

}
