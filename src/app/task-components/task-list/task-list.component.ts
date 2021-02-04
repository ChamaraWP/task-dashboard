import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListItem } from 'src/app/shared/models/list-item';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { TaskService } from 'src/app/task-services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  taskList: ListItem[];
  filterInput: string;
  hasError: boolean = false;
  weatherData:any;
  weatherDataError:boolean = false;

  constructor(private router: Router, private taskService: TaskService,private weatherService:WeatherService) {}

  ngOnInit(): void {
    this.loadTaskList();
    this.getWeatherData();
  }

  loadTaskList(){
    this.taskService.loadTaskList().subscribe(
      (res) => {
        if (res.status === 200) this.taskList = res.data;
      },
      (err) => {
        if (err.error.status === 500) {
          this.hasError = true;
        }
      }
    );
  }

  onItemClickHandler(id: string) {
    this.router.navigate(['./task-view', id]);
  }

  navigateToCreateTaskList() {
    this.router.navigate(['./task']);
  }

  onEditTaskHandler(id: string) {
    this.router.navigate(['./task', id]);
  }

  getWeatherData(){
    this.weatherService.getWeather('New York').subscribe(data => {
      this.weatherData = data
    },(err)=>{
        if(err)
          this.weatherDataError = true;
    })
  }
}
