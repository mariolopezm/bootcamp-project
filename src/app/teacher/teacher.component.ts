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
      this.teacher = new Teacher(null);
    }
    else{
      this.teacherService.getById(this.teacherId).subscribe(
        (teacher:Teacher) => this.teacher = teacher
      );
    }
  }

  onSubmit() {
    if(this.teacherId === "new"){
      this.teacherService.insert(this.teacher).subscribe
        (x => this.showMessage(x.name + " created"));
    }
    else{
      this.teacherService.update(this.teacher).subscribe
        (x => this.showMessage(x.name + " updated"));;
    }
  }

  showMessage(message: string){
    alert("Teacher " + message);
  }

}
