import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-create-to-do-component',
  templateUrl: './create-to-do-component.component.html',
  styleUrls: ['./create-to-do-component.component.scss']
})
export class CreateToDoComponentComponent implements OnInit {
  public projectForm: FormGroup;
  closeBtnName: string;
  isLoading: boolean;
  constructor(private todoServiceService: TodoServiceService, public bsModalRef: BsModalRef, private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.projectForm = this.formBuilder.group({
      task_name: ['', Validators.required],
      descrption: ['', Validators.required],
      repeating_task: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.projectForm.valueChanges.subscribe(res => {
      console.log(res);
      if (res['task_name'] && res['descrption'] && res['repeating_task']) {
        this.save();
      }
    });
  }

  close() {
    this.bsModalRef.hide();
  }

  save() {
    this.isLoading = true;
    Object.assign(this.projectForm.value, { id: Math.random(), isDone: false })
    this.todoServiceService.add(this.projectForm.value);
    this.bsModalRef.hide();
    this.isLoading = false;
  }

}
