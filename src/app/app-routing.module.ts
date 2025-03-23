import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/dashboard/dashboard.component').then((m)=> m.DashboardComponent)
  },
  {
    path: 'add',
    loadComponent: ()=>
      import('../pages/add-record/add-record.component').then((m)=> m.AddRecordComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
