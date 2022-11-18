import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerFeedbackComponent } from './manager-feedback/manager-feedback.component';
import { ManagerRootComponent } from './manager-root/manager-root.component';

const routes: Routes = [
    {path: "feedbacks", component:ManagerFeedbackComponent}
  ] ;

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],  
  exports: [RouterModule]
})
export class ManagerRoutingModule { }

export const routingComponents = [
  ManagerRootComponent,
  ManagerFeedbackComponent
]