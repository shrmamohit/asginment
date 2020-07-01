import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-done-list-component',
  templateUrl: './done-list-component.component.html',
  styleUrls: ['./done-list-component.component.scss']
})
export class DoneListComponentComponent implements OnInit {
  tasks:any=[];

  constructor(private todoServiceService: TodoServiceService) { }

  ngOnInit(): void {
    this.tasks = this.todoServiceService.donetask();

  }

  isunDone(task) {
    this.todoServiceService.isunDoneFn(task.id);
    this.tasks = this.todoServiceService.donetask();
  }
}
