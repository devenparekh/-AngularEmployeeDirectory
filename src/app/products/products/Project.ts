export class Project{
    projectId:any;
    projectName: any;
    BillingRate: any;
    PayRate:any;
    projectStartDate:any
    projectEndDate:any;
    invoicingEmail:any;
    billingCycle:any;
    employeeId:any

        constructor(
            projectId:number,
            projectName: string,
            BillingRate: string,
            PayRate:string,
            projectStartDate:Date,
            projectEndDate:Date,
            invoicingEmail:String,
            billingCycle:number,
            employeeId:number
        ){}
    }