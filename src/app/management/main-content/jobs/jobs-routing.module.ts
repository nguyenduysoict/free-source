import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './jobs.component';

const routes: Routes = [
  {
    path: "", component: JobsComponent, children: [
      { path: "", loadChildren: () => import("./job-list/job-list.module").then(m => m.JobListModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
