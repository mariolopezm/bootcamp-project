import { Teacher } from './teacher';
import { Injectable } from '@angular/core';

@Injectable()
export class TeacherService {

  teacherList: Teacher[] = [
    new Teacher("1", "Albert", "Einstein"),
    new Teacher("2", "Julio", "Cortazar"),
    new Teacher("3", "John", "Keneddy"),
    new Teacher("4", "Ozzy", "Osbourne"),
    new Teacher("5", "Pablo", "Picasso"),
    new Teacher("6", "Stan", "Lee"),
    new Teacher("7", "Shigeru", "Miyamoto")
  ]

  constructor() { }

  getAll():Teacher[]{
    return this.teacherList;
  }

  getById(id: string):Teacher{
    return this.teacherList.find(myObj => myObj.id == id);
  }

  getNextId():string{
    return (this.teacherList.length + 1).toString();
  }

  insert(teacher: Teacher){
    this.teacherList.push(teacher);
  }

  update(teacher: Teacher){
    this.getById(teacher.id).name = teacher.name;
    this.getById(teacher.id).lastName = teacher.lastName;
  }
}