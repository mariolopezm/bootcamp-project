import { IService } from './../../shared/definitions/app.service';
import { Teacher } from './../../teacher/shared/teacher';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import { Observable, Operator } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class TeacherService implements IService{

  private teachersUrl = 'api/teachers';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getAll(): Observable<Teacher[]>{
    return this.http.get(this.teachersUrl)
            .map((r: Response) => r.json().data as Teacher[]);
  }

  getById(id: string): Observable<Teacher>{
    const url = `${this.teachersUrl}/${id}`;
        return this.http.get(url)
            .map((r: Response) => r.json().data as Teacher);
  }

  insert(teacher: Teacher): Observable<Teacher>{
    return this.http
            .post(this.teachersUrl, JSON.stringify(teacher), { headers: this.headers })
            .map((res: Response) => res.json().data as Teacher);
  }

  update(teacher: Teacher): Observable<Teacher>{
    const url = `${this.teachersUrl}/${teacher.id}`;
        return this.http
            .put(url, JSON.stringify(teacher), { headers: this.headers })
            .map(() => teacher);
  }
}