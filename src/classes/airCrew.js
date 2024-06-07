export class AirCrew {

    type;
    info;

    constructor(name, surname) {
        this.info.name = name;
        this.info.surname = surname;
    }
    constructor(person) {
        this.person = person;
    }
    setType(type) {
        this.type = type;
    }
}
