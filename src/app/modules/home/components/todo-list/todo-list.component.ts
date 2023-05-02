import {Component, DoCheck} from '@angular/core';
//Interface
import {TaskList} from "../../model/task-list";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements  DoCheck{
  public taskList: Array<TaskList> = [];

  //Este evento escuta o elemento esperendo alguma acão quando acontecer ele da o sort na lista
  ngDoCheck() {
    // valores nao checked vai para cima e valores checked para baixo
    this.taskList.sort((first, last)=> Number(first.checked) - Number(last.checked))
  }

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
