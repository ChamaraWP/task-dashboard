import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-components/task-list/task-list.component';
import { TaskComponent } from './task-components/task/task.component';
import { ViewTaskComponent } from './task-components/view-task/view-task.component';

const routes: Routes = [
  {path:'',component:TaskListComponent},
  {path:'task',component:TaskComponent},
  {path:'task/:taskId',component:TaskComponent},
  {path:'task-view/:taskId',component:ViewTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
