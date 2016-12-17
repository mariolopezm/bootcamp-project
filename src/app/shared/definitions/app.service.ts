import { Observable } from 'rxjs/Rx';
export interface IService{

    getAll<T>(): Observable<T[]>;
    getById<T>(arg: string): Observable<T>;
    insert<T>(arg: T): Observable<T>;
    update<T>(arg: T): Observable<T>;
}