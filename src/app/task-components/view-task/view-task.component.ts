import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ListItem } from 'src/app/shared/models/list-item';
import { TaskService } from 'src/app/task-services/task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss'],
})
export class ViewTaskComponent implements OnInit {
  subscription = new Subscription();
  taskId: string;
  taskObject: ListItem;
  hasError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.getPathParams();
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTask(this.taskId).subscribe(
      (res: any) => {
        if (res.status === 200) {
          this.taskObject = res.data;
        }
      },
      (err) => {
        if (err.error.status === 500) {
          this.hasError = true;
        }
      }
    );
  }

  getPathParams() {
    this.subscription.add(
      this.activatedRoute.paramMap.subscribe((params) => {
        this.taskId = params.get('taskId') || '';
      })
    );
  }
}
