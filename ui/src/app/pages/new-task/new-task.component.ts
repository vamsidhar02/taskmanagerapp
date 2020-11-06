import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private taskservice:TaskService,private route:ActivatedRoute,private router:Router) { }

  projectid:string;

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.projectid=params['projectid'];
      }); 
  }
  createnewtask(title:string){
    this.taskservice.createtasks(title,this.projectid).subscribe((newtask:task)=>{
     this.router.navigate(['../'],{relativeTo:this.route});
    });
  }

}
