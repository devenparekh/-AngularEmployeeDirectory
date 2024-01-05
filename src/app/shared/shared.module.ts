import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorStatusComponent } from './error-status/error-status.component';
import { RouterModule } from '@angular/router';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { 
  AkitaNgRouterStoreModule 
} from '@datorama/akita-ng-router-store';



@NgModule({
  declarations: [
    ErrorStatusComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    AkitaNgDevtools,
    AkitaNgRouterStoreModule
  ]
})
export class SharedModule { }
