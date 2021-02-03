import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { ListItem } from 'src/app/shared/models/list-item';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss'],
})
export class TaskListItemComponent implements OnInit {
  @Input() taskData: ListItem;
  @Output() clickItem = new EventEmitter();
  @Output() viewSpecificTask = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onItemClick() {
    this.clickItem.emit(this.taskData._id);
  }

  onViewTask() {
    this.viewSpecificTask.emit(this.taskData._id);
  }
}
