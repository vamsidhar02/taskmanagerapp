import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { strict } from 'assert';
import { project } from 'src/app/models/project.model';
import { TaskService } from 'src/app/task.service';


@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(private taskservice:TaskService,private router:Router) { }

  ngOnInit(): void {
  }
  createnewproject(title:string){
    //for now lets just test this
    this.taskservice.createproject(title).subscribe((response:project)=>{
        console.log(response);
        this.router.navigate(['/projects',response._id])
    });
}

}
