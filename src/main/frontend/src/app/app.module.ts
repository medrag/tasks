import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksAddComponent } from './tasks/tasks-add/tasks-add.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import {TaskService} from "./tasks/task.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ConfirmationDialogComponent } from './tasks/confirmation-dialog/confirmation-dialog.component';
import {OverlayModule} from "@angular/cdk/overlay";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { UpdateDialogComponent } from './tasks/update-dialog/update-dialog.component';
import {MatFormFieldModule, MatInputModule} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksAddComponent,
    TasksListComponent,
    ConfirmationDialogComponent,
    UpdateDialogComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      OverlayModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      BrowserAnimationsModule,
      FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent],
    entryComponents: [ConfirmationDialogComponent,UpdateDialogComponent],
    schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
