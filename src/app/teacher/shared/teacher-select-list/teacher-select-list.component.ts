import { TeacherService } from './../teacher.service';
import { Teacher } from './../teacher';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-select-list',
  templateUrl: './teacher-select-list.component.html',
  styleUrls: ['./teacher-select-list.component.css']
})
export class TeacherSelectListComponent implements OnInit {

  constructor(private teacherService: TeacherService) { }

  teachers: Teacher[];

  ngOnInit() {
    this.teachers = this.teacherService.getAll();
  }

}
