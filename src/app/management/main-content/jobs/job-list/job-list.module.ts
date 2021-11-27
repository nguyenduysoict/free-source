import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './job-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: JobListComponent }
]

@NgModule({
  declarations: [
    JobListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class JobListModule { }
