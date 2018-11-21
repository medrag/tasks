import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Task} from "../task.model";

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {

  public task : Task;

  constructor(public dialogRef : MatDialogRef<UpdateDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: { task: Task }) { }

  ngOnInit()
  {
  }
}
