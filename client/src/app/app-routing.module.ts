import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginLayoutComponent} from './shared/layouts/login-layout/login-layout.component';
import {HomeLayoutComponent} from './shared/layouts/home-layout/home-layout.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {PlusEducationComponent} from './components/education-operations/plus-education/plus-education.component';
import {MinusEducationComponent} from './components/education-operations/minus-education/minus-education.component';
import {MultiplyEducationComponent} from './components/education-operations/multiply-education/multiply-education.component';
import {DivideEducationComponent} from './components/education-operations/divide-education/divide-education.component';
import {PlusEvaluationComponent} from './components/evaluation-operations/plus-evaluation/plus-evaluation.component';
import {MinusEvaluationComponent} from './components/evaluation-operations/minus-evaluation/minus-evaluation.component';
import {MultiplyEvaluationComponent} from './components/evaluation-operations/multiply-evaluation/multiply-evaluation.component';
import {DivideEvaluationComponent} from './components/evaluation-operations/divide-evaluation/divide-evaluation.component';

const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: []
},
  {
    path: 'dashboard', component: HomeLayoutComponent,
    children: [
      {
        path: '', component: DashboardComponent, pathMatch: 'full'
      },
      {
        path: 'plus-education', component: PlusEducationComponent
      },
      {
        path: 'minus-education', component: MinusEducationComponent
      },
      {
        path: 'multiply-education', component: MultiplyEducationComponent
      },
      {
        path: 'divide-education', component: DivideEducationComponent
      },
      {
        path: 'plus-evaluation', component: PlusEvaluationComponent
      },
      {
        path: 'minus-evaluation', component: MinusEvaluationComponent
      },
      {
        path: 'multiply-evaluation', component: MultiplyEvaluationComponent
      },
      {
        path: 'divide-evaluation', component: DivideEvaluationComponent
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
