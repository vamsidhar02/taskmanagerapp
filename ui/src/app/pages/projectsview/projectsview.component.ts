import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-projectsview',
  templateUrl: './projectsview.component.html',
  styleUrls: ['./projectsview.component.scss']
})
export class ProjectsviewComponent implements OnInit {
  projects:any[];
  tasks:any[];
  constructor(private taskservice:TaskService ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.taskservice.gettasks(params.projectid).subscribe((tasks:any[])=>{
        this.tasks=tasks;
      }); 
    });
    this.taskservice.getprojects().subscribe((projects:any[])=>{
      this.projects=projects;
    });
  }
 

}
