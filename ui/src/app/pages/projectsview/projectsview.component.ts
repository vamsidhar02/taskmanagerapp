import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-projectsview',
  templateUrl: './projectsview.component.html',
  styleUrls: ['./projectsview.component.scss']
})
export class ProjectsviewComponent implements OnInit {

  constructor(private taskservice:TaskService) { }

  ngOnInit(): void {
  }
  createnewproject(){
      //for now lets just test this
      this.taskservice.createproject('testing').subscribe((response:any)=>{
          console.log(response);
      });
  }

}
