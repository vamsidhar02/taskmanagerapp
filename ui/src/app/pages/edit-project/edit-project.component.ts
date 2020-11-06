import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  constructor(private route:ActivatedRoute,private taskservice:TaskService,private router:Router) { }

  projectid:string
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.projectid=params.projectid
      }
    )
  }
  updateproject(title:string){
    this.taskservice.updateproject(this.projectid,title).subscribe(()=>{
      this.router.navigate([`/projects`,this.projectid]);
    })
  }

}
