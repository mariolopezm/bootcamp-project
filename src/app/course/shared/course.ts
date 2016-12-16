import { Teacher } from './../../teacher/shared/teacher';

export class Course {

    constructor(
        public id: string,
        public name: string = "",
        public startingDate: string = "2016-12-16",
        public duration: number = 1,
        public teacher: string = ""
    )
    {}
}
