import { Component, OnInit } from '@angular/core';
import {Task} from "src/app/tasks/task.model";
import {TaskService} from "../task.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";
import {UpdateDialogComponent} from "../update-dialog/update-dialog.component";





@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {


  tasks : Task[] = [];
  dialogRef : MatDialogRef<ConfirmationDialogComponent>;
  dialogRef2 : MatDialogRef<UpdateDialogComponent>;

  constructor(private taskService : TaskService,public dialog: MatDialog) { }

  ngOnInit()
  {
       this.taskService.getTasks().subscribe(
                (tasks : any[]) => {this.tasks = tasks;},
                (error) => console.log(error)
            );

       this.taskService.onAddTaskEvent.subscribe(
           (newTask : Task) => this.tasks.push(newTask)
       )

      this.taskService.onDeleteTaskEvent.subscribe(
          (newTask : Task) =>
          {
              const index: number = this.tasks.indexOf(newTask);
              if (index !== -1) {
                  this.tasks.splice(index, 1);
              }
          }
      )
  }

  getDueDateLabel(task : Task)
  {
    return task.completed ? 'label-success': 'label-primary';
  }

  onTaskChange(event,task)
  {
      return this.taskService.saveTask(task,event.target.checked).subscribe();
  }

  deleteTask(task)
  {
      this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
          disableClose: false
      });

      this.dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete ?"

      this.dialogRef.afterClosed().subscribe(result => {
          if(result)
          {
               this.taskService.deleteTask(task).subscribe(
                   success => this.taskService.onDeleteTaskEvent.emit(task)
              );
          }
          this.dialogRef = null;
      });
  }

  updateTask(task)
  {
        this.dialogRef2 = this.dialog.open(UpdateDialogComponent, {
            disableClose:false,
            data : {taskName : task.name}
        });

        this.dialogRef2.afterClosed().subscribe( result =>
        {
            if(result != null)
            {
                task.name = result;
               this.taskService.updateTask(task).subscribe()
            }
            this.dialogRef2 = null;
        })
  }
}
