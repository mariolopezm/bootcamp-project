import { IService } from './../../shared/definitions/app.service';
import { Course } from './../../course/shared/course';

import { Injectable } from '@angular/core';

@Injectable()
export class CourseService implements IService{

  constructor() { }

  courseList: Course[] = [
    new Course("1", "Physics", "2016-12-30", 32, "1"),
    new Course("2", "Writing", "2017-01-15", 32, "2"),
    new Course("3", "Politics", "2017-03-05", 32, "3"),
    new Course("4", "Music", "2016-11-15", 32, "4"),
    new Course("5", "Art", "2016-12-30", 32, "5"),
    new Course("6", "Pop culture", "2017-02-15", 32, "6"),
    new Course("7", "Game theory", "2016-02-15", 32, "7")
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
    let updatedCourse: Course = this.getById(course.id);
    updatedCourse.name = course.name;
    updatedCourse.startingDate = course.startingDate;
    updatedCourse.duration = course.duration;
    updatedCourse.teacher = course.teacher;
  }

}