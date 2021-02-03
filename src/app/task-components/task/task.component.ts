import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ListItem } from 'src/app/shared/models/list-item';
import { ToastService } from 'src/app/shared/services/toast.service';
import { TaskService } from 'src/app/task-services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  taskId: string;
  subscription = new Subscription();
  createTaskForm: FormGroup;
  editTaskForm: FormGroup;
  taskToEdit: ListItem;
  isSubmitting: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPathParams();
    if (this.taskId != '') {
      this.editTaskForm = this.initEditForm();
      this.taskService.getTask(this.taskId).subscribe((res) => {
        this.taskToEdit = res.data;
        this.setValuesForm(this.taskToEdit);
      });
    } else {
      this.createTaskForm = this.initCreateForm();
    }
  }

  getPathParams() {
    this.subscription.add(
      this.activatedRoute.paramMap.subscribe((params) => {
        this.taskId = params.get('taskId') || '';
      })
    );
  }

  createFormSubmit(formValues: any) {
    if (this.createTaskForm.invalid) {
      this.checkErrorsOnSubmit(this.createTaskForm);
    } else {
      this.isSubmitting = true;
      this.taskService.creatNewTask(formValues).subscribe((response) => {
        console.log(response.status === 201);
        if (response.status === 201)
          this.showSuccessToast('Task has been saved successfully');
        if (response.status === 500) this.showFailedToast();

        this.isSubmitting = false;
        this.router.navigate(['']);
      });
    }
  }

  editFormSubmit(formValues: any) {
    if (this.editTaskForm.invalid) {
      this.checkErrorsOnSubmit(this.editTaskForm);
    } else {
      this.isSubmitting = false;
      this.taskService.updateTask(this.taskId, formValues).subscribe((res) => {
        if (res.status === 200) {
          this.showSuccessToast('Task updated');
        }
        if (res.status === 500) {
          this.showFailedToast();
        }
        this.isSubmitting = false;
        this.router.navigate(['']);
      });
    }
  }

  deleteTask() {
    this.taskService.deleteTask(this.taskId).subscribe((res) => {
      if (res.status === 200) {
        this.showSuccessToast('Task deleted');
      }
      if (res.status === 500) {
        this.showFailedToast();
      }
    });
    this.router.navigate(['']);
  }

  checkErrorsOnSubmit(form: FormGroup) {
    Object.keys(form.controls).forEach((key) => {
      if (form.controls[key].invalid) {
        form.controls[key].markAsTouched();
        form.controls[key].markAsDirty();
      }
    });
  }

  setValuesForm(data: ListItem) {
    this.editTaskForm.setValue({
      schedule: data.schedule,
      description: data.description,
    });
  }

  initCreateForm() {
    return this.formBuilder.group({
      title: ['', Validators.required],
      schedule: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  initEditForm() {
    return this.formBuilder.group({
      schedule: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  showSuccessToast(msg: string) {
    this.toastService.show(msg, {
      classname: 'bg-success-toast text-light',
      delay: 4000,
      autohide: true,
    });
  }

  showFailedToast() {
    this.toastService.show('Something went wong', {
      classname: 'bg-danger text-light',
      delay: 5000,
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
}
