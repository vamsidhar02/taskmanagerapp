import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { ProjectsviewComponent } from './pages/projectsview/projectsview.component';

const routes: Routes = [
  {path:'',redirectTo:'projects',pathMatch:'full'},
  {path:'new-project',component:NewProjectComponent},
  {path:'projects/:projectid',component:ProjectsviewComponent},
  {path:'projects',component:ProjectsviewComponent},
  {path:'projects/:projectid/new-task',component:NewTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
