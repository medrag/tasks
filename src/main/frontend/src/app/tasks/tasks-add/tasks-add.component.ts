import { Component, OnInit } from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "../task.model";
import {subscribeOn} from "rxjs/operators";

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit
{
  taskValue : string = null;

  constructor(private taskService : TaskService) {}

  ngOnInit() {}

  saveTask(event)
  {
        let task : Task = new Task(event.target.value,this.getTodayAsString(),false);
        this.taskService.addTask(task).subscribe
        (
            (newTask :Task) =>
            {
                    //clear the input
                    this.taskValue = ' ';
                    this.taskService.onAddTaskEvent.emit(newTask);
            }
        );
  }

  getTodayAsString()
  {
      let today = new Date();
      let dd : any = today.getDate();
      let mm : any = today.getMonth()+1;
      let yyyy : any = today.getFullYear();

      if(dd < 10)
      {
          dd = '0' + dd;
      }

      if(mm < 10)
      {
          mm = '0' + mm;
      }
      return mm+'/'+dd+'/'+yyyy;
  }
}
