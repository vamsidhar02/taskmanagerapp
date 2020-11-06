import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(private taskservice:TaskService) { }

  ngOnInit(): void {
  }
  createnewproject(title:string){
    //for now lets just test this
    this.taskservice.createproject(title).subscribe((response:any)=>{
        console.log(response);
    });
}

}
