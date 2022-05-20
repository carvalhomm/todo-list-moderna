import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() public set novoItem(item: string) {
    if(!item) { return; }
    console.log('recebendo um item novo --> ', item);
    this.array.push({nome: item, checked: false});
    console.log('array com item novo --> ', this.array);
  }
  public array: {nome: string, checked: boolean}[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  public deletarItem(item: string) {
    const index = this.array.findIndex((it) => item === it.nome);
    console.log('index --> ', index);
    this.array.splice(index, 1);
    console.log('item deletado --> ', this.array);
  }

}
