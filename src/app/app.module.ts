import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TaskListComponent } from './task-components/task-list/task-list.component';
import { TaskListItemComponent } from './task-components/task-list-item/task-list-item.component';
import { TaskComponent } from './task-components/task/task.component';
import { ViewTaskComponent } from './task-components/view-task/view-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shared/pipes/filter-pipe.pipe';
import { EllipsisPipe } from './shared/pipes/ellipsis.pipe';
import { ToastComponent } from './shared/toast/toast.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskListItemComponent,
    TaskComponent,
    ViewTaskComponent,
    ToastComponent,
    FilterPipe,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
