export interface Employee {
    id : string,
    name : string,
    address? : string,
    division : string,
}

export interface Manager extends Employee {
    numberOfEmployee : number
}