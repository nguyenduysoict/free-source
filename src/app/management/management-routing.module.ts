import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './management.component';

const routes: Routes = [
  {
    path: "", component: ManagementComponent, children: [
      { path: "jobs", loadChildren: () => import("./main-content/jobs/jobs.module").then(m => m.JobsModule) },
      { path: "candidates", loadChildren: () => import("./main-content/candidates/candidates.module").then(m => m.CandidatesModule) }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
