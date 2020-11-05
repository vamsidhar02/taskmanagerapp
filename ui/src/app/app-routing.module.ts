import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsviewComponent } from './pages/projectsview/projectsview.component';

const routes: Routes = [
  {path:'',component:ProjectsviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
