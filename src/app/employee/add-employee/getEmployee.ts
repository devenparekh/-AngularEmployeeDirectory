export class GetEmployee{
    employeeId:any;
    firstName: any;
    lastName: any;
    address:any;
    project:any
    ssn:any;
    joinDate:any;
    status:any

        constructor(
            employeeId:number,
            firstName: string,
            lastName: string,
            address:string,
            project:string,
            ssn:number,
            joinDate:Date,
            status:number
        ){}
    }