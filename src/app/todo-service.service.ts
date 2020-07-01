import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  private _todos = new BehaviorSubject<any[]>([]);
  private dataStore: { todos: any[] } = { todos: [] };
  todos = this._todos.asObservable();
  constructor() { }

  add(data) {
    console.log(data);
    this.dataStore.todos.push(data);
    this._todos.next(Object.assign({}, this.dataStore).todos);
  }

  doneTask(id) {
    let index = this.dataStore.todos.findIndex(x => x.id == id);
    this.dataStore.todos[index]['isDone'] = true;
    this._todos.next(Object.assign({}, this.dataStore).todos);
  }

  isunDoneFn(id) {
    let index = this.dataStore.todos.findIndex(x => x.id == id);
    this.dataStore.todos[index]['isDone'] = false;
    this._todos.next(Object.assign({}, this.dataStore).todos);
  }

  donetask() {
    let task: any = this.dataStore.todos.filter(x => x.isDone === true);
    return task;
  }
}
