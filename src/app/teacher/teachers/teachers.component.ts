import { Teacher } from './../shared/teacher';
import { TeacherService } from './../../core/services/teacher.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  constructor(private teacherService: TeacherService) { }

  teachers: Teacher[];

  ngOnInit() {
    this.teachers = this.teacherService.getAll();
  }

}
