import { InMemoryDbService } from 'angular-in-memory-web-api';
export class FakeWebApi implements InMemoryDbService {
    createDb() {
        let courses = [
            { id: 1, name: 'Physics', startingDate: '2016-12-30', duration: 32, teacher: 1},
            { id: 2, name: 'Writing', startingDate: '2017-01-15', duration: 32, teacher: 2},
            { id: 3, name: 'Politics', startingDate: '2017-03-05', duration: 32, teacher: 3},
            { id: 4, name: 'Music', startingDate: '2016-11-15', duration: 32, teacher: 4},
            { id: 5, name: 'Art', startingDate: '2016-12-30', duration: 32, teacher: 5},
            { id: 6, name: 'Pop culture', startingDate: '2017-02-15', duration: 32, teacher: 6},
            { id: 7, name: 'Game theory', startingDate: '2016-02-15', duration: 32, teacher: 7}
        ];

        let teachers = [
            {id: 1, name: 'Albert', lastName: 'Einstein'},
            {id: 2, name: 'Julio', lastName: 'Cortazar'},
            {id: 3, name: 'John', lastName: 'Keneddy'},
            {id: 4, name: 'Ozzy', lastName: 'Osbourne'},
            {id: 5, name: 'Pablo', lastName: 'Picasso'},
            {id: 6, name: 'Stan', lastName: 'Lee'},
            {id: 7, name: 'Shigeru', lastName: 'Miyamoto'}
        ];
        return { courses, teachers };
    }
}