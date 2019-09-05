import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginLayoutComponent } from './shared/layouts/login-layout/login-layout.component';
import { HomeLayoutComponent } from './shared/layouts/home-layout/home-layout.component';
import { PlusEducationComponent } from './components/education-operations/plus-education/plus-education.component';
import { MinusEducationComponent } from './components/education-operations/minus-education/minus-education.component';
import { MultiplyEducationComponent } from './components/education-operations/multiply-education/multiply-education.component';
import { DivideEducationComponent } from './components/education-operations/divide-education/divide-education.component';
import { DivideEvaluationComponent } from './components/evaluation-operations/divide-evaluation/divide-evaluation.component';
import { MinusEvaluationComponent } from './components/evaluation-operations/minus-evaluation/minus-evaluation.component';
import { MultiplyEvaluationComponent } from './components/evaluation-operations/multiply-evaluation/multiply-evaluation.component';
import { PlusEvaluationComponent } from './components/evaluation-operations/plus-evaluation/plus-evaluation.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    PlusEducationComponent,
    MinusEducationComponent,
    MultiplyEducationComponent,
    DivideEducationComponent,
    DivideEvaluationComponent,
    MinusEvaluationComponent,
    MultiplyEvaluationComponent,
    PlusEvaluationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
