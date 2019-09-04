import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginLayoutComponent } from './shared/layouts/login-layout/login-layout.component';
import { HomeLayoutComponent } from './shared/layouts/home-layout/home-layout.component';
import { EvaluationOperationsComponent } from './components/evaluation-operations/evaluation-operations.component';
import { PlusEducationComponent } from './components/education-operations/plus-education/plus-education.component';
import { MinusEducationComponent } from './components/education-operations/minus-education/minus-education.component';
import { MultiplyEducationComponent } from './components/education-operations/multiply-education/multiply-education.component';
import { DivideEducationComponent } from './components/education-operations/divide-education/divide-education.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    EvaluationOperationsComponent,
    PlusEducationComponent,
    MinusEducationComponent,
    MultiplyEducationComponent,
    DivideEducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
