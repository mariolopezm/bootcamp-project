export interface IService{

    getAll<T>(): T[];
    getById<T>(arg: string): T;
    getNextId(): string;
    insert<T>(arg: T);
    update<T>(arg: T);
}