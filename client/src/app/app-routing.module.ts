import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginLayoutComponent} from './shared/layouts/login-layout/login-layout.component';
import {HomeLayoutComponent} from './shared/layouts/home-layout/home-layout.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [{
  path: '', component: LoginLayoutComponent,
  children: []
},
  {
    path: 'dashboard', component: HomeLayoutComponent,
    children: [
      {
        path: '', component: DashboardComponent, pathMatch: 'full'
      },
    ]
  },
  {
    path: '**', redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
