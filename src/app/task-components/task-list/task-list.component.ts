import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListItem } from 'src/app/shared/models/list-item';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onItemClickHandler(){
    this.router.navigate(['./task',2])
  }

  navigateToCreateTaskList(){
    this.router.navigate(['./task'])
  }

  onViewSpecifTaskHandler(){
    this.router.navigate(['./task-view',3])
  }

}
