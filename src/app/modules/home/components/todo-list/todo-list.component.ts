import {Component} from '@angular/core';
//Interface
import {TaskList} from "../../model/task-list";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  public taskList: Array<TaskList> = [];

  public setEmitItemTaskList(event: string) {
    this.taskList.push({task: event, checked: false})
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteALLTaskList() {
    const confirm = window.confirm("Deseja realmente Deletar tudo?")
    if (confirm) {
      this.taskList = [];
    }
  }

}
