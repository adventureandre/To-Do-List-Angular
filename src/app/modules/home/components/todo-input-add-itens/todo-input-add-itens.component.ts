import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {
  @Output() public emitItemTaskList = new EventEmitter();
  public addItemTaskList: string = "";

  public submitItemTaskList(){

    if (this.addItemTaskList){
    // emit o valor para fora do component
    this.emitItemTaskList.emit(this.addItemTaskList);
    this.addItemTaskList = "";
    }
  }

}
