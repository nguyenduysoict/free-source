import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", loadChildren: () => import("./management/management.module").then(m => m.ManagementModule) },
  { path: "login", loadChildren: () => import("./login/login.module").then(m => m.LoginModule) },
  { path: "**", loadChildren: () => import("./not-found/not-found.module").then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
