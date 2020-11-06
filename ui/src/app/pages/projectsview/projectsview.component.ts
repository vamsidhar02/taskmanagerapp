import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { project } from 'src/app/models/project.model';
import { task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-projectsview',
  templateUrl: './projectsview.component.html',
  styleUrls: ['./projectsview.component.scss']
})
export class ProjectsviewComponent implements OnInit {
  projects:project[];
  tasks:task[];
  selectedprojectid:string;
  constructor(private taskservice:TaskService ,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      if(params.projectid){
        this.selectedprojectid=params.projectid;
      }
      this.taskservice.gettasks(params.projectid).subscribe((tasks:task[])=>{
        this.tasks=tasks;
      }); 
    });
    this.taskservice.getprojects().subscribe((projects:project[])=>{
      this.projects=projects;
    });
  }
  ontaskclick(task:task){
    this.taskservice.complete(task).subscribe(()=>{
      console.log('completed successfully')
      task.completed=!task.completed;
    });
  }

  onclickdeleteproject(){
    this.taskservice.deleteproject(this.selectedprojectid).subscribe((res:any)=>{
      console.log(res);
      this.router.navigate(['/projects'])
    });
  }

  taskdelete(id:string){
    this.taskservice.deletetask(this.selectedprojectid,id).subscribe((res:any)=>{
      this.tasks=this.tasks.filter(val=>val._id!=id);
      console.log(res);
    });
  }
 

}
