import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsviewComponent } from './pages/projectsview/projectsview.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsviewComponent,
    NewProjectComponent,
    NewTaskComponent,
    EditProjectComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
