import { Component } from '@angular/core';
import { RouterQuery } from '@datorama/akita-ng-router-store';
@Component({
  selector: 'app-error-status',
  templateUrl: './error-status.component.html',
  styleUrls: ['./error-status.component.css']
})
export class ErrorStatusComponent {

  errorStatus: any;
  errorStatusList: any[] = [
    { statusCode: 401, statusMsg: "Unauthorized", statusImg: "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif",content:"You are not cleared to access this page. \n Get Higher level Clearance to access these Details." },
    { statusCode: 400, statusMsg: "Bad Request", statusImg: "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif",content:"Something is Fishy about this Request. \n Try changing a few Details and Try again." },
    { statusCode: 404, statusMsg: "Not Found", statusImg: "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif",content:"Hellooo! Is Anyone Here? \n Seeems like there's No One Here!" },
    { statusCode: 403, statusMsg: "Forbidden", statusImg: "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif",content:"Contact Administrator." },
    { statusCode: 500, statusMsg: "Unexpected Error", statusImg: "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif",content:"Something went terribly wrong. \n Try Again after some Time." },
    { statusCode: 503, statusMsg: "Service Unavailable", statusImg: "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" ,content:"Seems like the services are down. \n Try Again after some Time." },
    { statusCode: 0, statusMsg: "Server Down. Try again Later", statusImg: "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" ,content:"Seems like the servers are down. \n Try Again after some Time." }
  ];

  constructor(private routerQuery:RouterQuery){}

  ngOnInit(): void {
    this.loadRelevantItems();
  }

  loadRelevantItems() {
    this.routerQuery.selectParams('status').subscribe((statusCode: any) => {
      this.errorStatus = this.errorStatusList.filter(i => i.statusCode == statusCode);
      console.log(this.errorStatus);
    });
  }

}
