import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuardService as RoleGuard } from 'src/app/auth/guards/role-guard.service';
import { ManagerFeedbackComponent } from './manager-feedback/manager-feedback.component';
import { ManagerRootComponent } from './manager-root/manager-root.component';

const routes: Routes = [
  { path: 'manager', component: ManagerRootComponent, canActivate: [RoleGuard], data:{expectedRole: "Manager"},
  children:[
    {path: "feedbacks", component:ManagerFeedbackComponent}
  ] },
  { path: '', redirectTo: 'manager', pathMatch: 'full' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],  
  exports: [RouterModule]
})
export class ManagerRoutingModule { }

export const routingComponents = [
  ManagerRootComponent,
  ManagerFeedbackComponent
]