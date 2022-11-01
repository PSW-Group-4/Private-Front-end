import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditItemComponent } from './containers/edit-item/edit-item.component';

const routes: Routes = [
  {   path: 'maps',        component: EditItemComponent,
      children: [
        {   path: 'edit-maps/:id',   component: EditItemComponent   }
      ]

  },
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
export const routingComponents = [
  EditItemComponent
]
