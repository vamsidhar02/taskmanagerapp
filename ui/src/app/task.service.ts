import { Injectable } from '@angular/core';
import { WebrequestService } from './webrequest.service';
import {task} from './models/task.model';
import {project} from './models/project.model'
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private service :WebrequestService) { }


  createproject(title:string){
    //creating the project using post method from webrequest.service.ts
    return this.service.post('projects',{title});
  }
  updateproject(id:string,title:string){
    //creating the project using post method from webrequest.service.ts
    return this.service.patch(`projects/${id}`,{title});
  }
  getprojects(){
    return this.service.get('projects');
  }
  gettasks(projectid:string){
    return this.service.get(`projects/${projectid}/tasks`)
  }
  createtasks(title:string,projectid:string){
    return this.service.post(`projects/${projectid}/tasks`,{title})
  }
  complete(task:task){
    return this.service.patch(`projects/${task.projectid}/tasks/${task._id}`,{
      completed:!task.completed,
    });
  }
  deleteproject(id:string){
    return this.service.delete(`projects/${id}`)
  }
  deletetask(id:string,taskid:string){
    return this.service.delete(`projects/${id}/tasks/${taskid}`)
  }
  updatetask(projectid:string,taskid:string,title:string){
    //creating the project using post method from webrequest.service.ts
    return this.service.patch(`projects/${projectid}/tasks/${taskid}`,{title});
  }
}
