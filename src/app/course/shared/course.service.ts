import { TeacherService } from './../../teacher/shared/teacher.service';
import { Course } from './course';
import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  constructor(private teacherService: TeacherService) { }

  courseList: Course[] = [
    new Course("1", "Physics", new Date(), 32, this.teacherService.getById("1")),
    new Course("2", "Writing", new Date(), 32, this.teacherService.getById("2")),
    new Course("3", "Politics", new Date(), 32, this.teacherService.getById("3")),
    new Course("4", "Music", new Date(), 32, this.teacherService.getById("4")),
    new Course("5", "Art", new Date(), 32, this.teacherService.getById("5")),
    new Course("6", "Pop culture", new Date(), 32, this.teacherService.getById("6")),
    new Course("7", "Game theory", new Date(), 32, this.teacherService.getById("7"))
  ]

  getAll():Course[]{
    return this.courseList;
  }

  getById(id: string):Course{
    return this.courseList.find(myObj => myObj.id == id);
  }

  getNextId():string{
    return (this.courseList.length + 1).toString();
  }

  insert(course: Course){
    this.courseList.push(course);
  }

  update(course: Course){
    this.getById(course.id).name = course.name;
    this.getById(course.id).startingDate = course.startingDate;
    this.getById(course.id).duration = course.duration;
    this.getById(course.id).teacher = course.teacher;
  }

}
