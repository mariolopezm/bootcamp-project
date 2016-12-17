import { Observable, Operator } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { IService } from './../../shared/definitions/app.service';
import { Course } from './../../course/shared/course';
import { Http, Response, Headers } from '@angular/http'

import { Injectable } from '@angular/core';

@Injectable()
export class CourseService implements IService{

  private coursesUrl = 'api/courses';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getAll(): Observable<Course[]>{
    return this.http.get(this.coursesUrl)
            .map((r: Response) => r.json().data as Course[]);
  }

  getById(id: string): Observable<Course>{
    const url = `${this.coursesUrl}/${id}`;
        return this.http.get(url)
            .map((r: Response) =>  r.json().data as Course);
  }

  insert(course: Course): Observable<Course>{
    return this.http
            .post(this.coursesUrl, JSON.stringify(course), { headers: this.headers })
            .map(res => {
              return res.json().data as Course
            });
  }

  update(course: Course): Observable<Course>{
    const url = `${this.coursesUrl}/${course.id}`;
        return this.http
            .put(url, JSON.stringify(course), { headers: this.headers })
            .map(() => course);
  }

}