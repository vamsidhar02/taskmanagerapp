import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { ProjectsviewComponent } from './pages/projectsview/projectsview.component';

const routes: Routes = [
  {path:'',redirectTo:'projects',pathMatch:'full'},
  {path:'new-project',component:NewProjectComponent},
  {path:'projects/:projectid',component:ProjectsviewComponent},
  {path:'projects',component:ProjectsviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
