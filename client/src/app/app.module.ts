import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginLayoutComponent } from './shared/layouts/login-layout/login-layout.component';
import { HomeLayoutComponent } from './shared/layouts/home-layout/home-layout.component';
import { EducationOperationsComponent } from './components/education-operations/education-operations.component';
import { EvaluationOperationsComponent } from './components/evaluation-operations/evaluation-operations.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    EducationOperationsComponent,
    EvaluationOperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
