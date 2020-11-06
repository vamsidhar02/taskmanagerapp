import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  constructor(private route:ActivatedRoute,private taskservice:TaskService,private router:Router) { }

  projectid:string
  taskid:string
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.taskid=params.taskid;
        this.projectid=params.projectid;
      }
    )
  }
  updatetask(title:string){
    this.taskservice.updatetask(this.projectid,this.taskid,title).subscribe(()=>{
      this.router.navigate([`/projects`,this.projectid]);
    })
  }
}
