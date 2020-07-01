import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreateToDoComponentComponent } from '../create-to-do-component/create-to-do-component.component';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.scss']
})
export class ToDoListComponentComponent implements OnInit {

  bsModalRef: BsModalRef;
  modalRef: BsModalRef;
  tasks: any[];
  constructor(private todoServiceService: TodoServiceService, private modalService: BsModalService, ) { }

  ngOnInit(): void {
    this.todoServiceService.todos.subscribe(res => {
      console.log(res);
      this.tasks = res;
    });
  }
  isDoneFn(task) {
    this.todoServiceService.doneTask(task.id);
  }

  addTask() {
    const initialState = {
      data: 'data'
    };
    this.bsModalRef = this.modalService.show(CreateToDoComponentComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'CANCEL';
  }
}
