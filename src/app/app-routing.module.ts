import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth', loadChildren: 'app/modules/+auth/auth.module#AuthModule'
  },
  {
    path: 'main', loadChildren: 'app/modules/+main/main.module#MainModule', canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
