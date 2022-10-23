import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";
import { ManagerFeedbackComponent } from "./manager-feedback/manager-feedback.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'managerFeedback', component: ManagerFeedbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
