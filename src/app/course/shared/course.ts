import { Teacher } from './../../teacher/shared/teacher';

export class Course {

    constructor(
        public id: string,
        public name: string = "",
        public startingDate: Date = new Date(),
        public duration: number = 0,
        public teacher: Teacher = null
    )
    {}
}
