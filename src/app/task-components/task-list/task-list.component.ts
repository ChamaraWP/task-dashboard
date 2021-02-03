import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListItem } from 'src/app/shared/models/list-item';
import { TaskService } from 'src/app/task-services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  taskList: ListItem[];
  filterInput: any;
  hasError: boolean = false;

  constructor(private router: Router, private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.loadTaskList().subscribe((res) => {
      if (res.status === 200) this.taskList = res.data;
      if (res.status === 500) this.hasError = true;
    });
  }

  onItemClickHandler(id: string) {
    this.router.navigate(['./task', id]);
  }

  navigateToCreateTaskList() {
    this.router.navigate(['./task']);
  }

  onViewSpecifTaskHandler(id: string) {
    this.router.navigate(['./task-view', id]);
  }
}
