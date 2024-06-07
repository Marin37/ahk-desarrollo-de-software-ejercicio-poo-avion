import { Person } from "./person";

export class Passenger {
    seat;
    info;

    constructor(name, surname) {
        this.info.name = name;
        this.info.surname = surname;
    }
    constructor(person) {
        this.person = person;
    }
    setSeat(seat) {
        this.seat = seat;
    }
}
