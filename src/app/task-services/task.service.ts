import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ListItem } from '../shared/models/list-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private httpClient: HttpClient) {}

  loadTaskList(): Observable<any> {
    return this.httpClient.get(environment.endpoints.getTaskList);
  }

  creatNewTask(requestPayload: ListItem): Observable<any> {
    return this.httpClient.post(
      environment.endpoints.creatTask,
      requestPayload
    );
  }

  getTask(taskId: string): Observable<any> {
    let endpoint = environment.endpoints.getOneTask.replace(
      '{taskId}',
      taskId.toString()
    );
    return this.httpClient.get(endpoint);
  }

  updateTask(taskId: string, requestPayload: ListItem): Observable<any> {
    let endpoint = environment.endpoints.updateTask.replace(
      '{taskId}',
      taskId.toString()
    );
    return this.httpClient.patch(endpoint, requestPayload);
  }

  deleteTask(taskId: string): Observable<any> {
    let endpoint = environment.endpoints.deleteTask.replace(
      '{taskId}',
      taskId.toString()
    );
    return this.httpClient.delete(endpoint);
  }
}
