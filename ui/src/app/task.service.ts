import { Injectable } from '@angular/core';
import { WebrequestService } from './webrequest.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private service :WebrequestService) { }


  createproject(title:string){
    //creating the project using post method from webrequest.service.ts
    return this.service.post('projects',{title});
  }
  getprojects(){
    return this.service.get('projects');
  }
  gettasks(projectid:string){
    return this.service.get(`projects/${projectid}/tasks`)
  }

}
