import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginLayoutComponent} from './shared/layouts/login-layout/login-layout.component';
import {HomeLayoutComponent} from './shared/layouts/home-layout/home-layout.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {EducationOperationsComponent} from './components/education-operations/education-operations.component';
import {EvaluationOperationsComponent} from './components/evaluation-operations/evaluation-operations.component';

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
      {
        path: 'education-operations', component: EducationOperationsComponent
      },
      {
        path: 'evaluation-operations', component: EvaluationOperationsComponent
      }
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
