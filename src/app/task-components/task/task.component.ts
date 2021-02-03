import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  taskId:string | null;
  subscription = new Subscription();

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  
  }

  getPathParams(){
    this.subscription.add(
      this. activatedRoute.paramMap.subscribe((params) => {
        this.taskId = params.get('taskId');
      })
    );
  }

  createTask(){

  }

  editTask(){
    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

}
