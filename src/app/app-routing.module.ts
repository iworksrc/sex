import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'main', loadChildren: 'app/modules/+main/main.module#MainModule', canActivate: [AuthGuard]
  },
  {
    path: 'auth', loadChildren: 'app/modules/+auth/auth.module#AuthModule'
  },
  { path: '**', redirectTo: 'auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
