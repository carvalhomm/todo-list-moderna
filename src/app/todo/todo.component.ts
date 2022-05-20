import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() public todo: {nome: string, checked: boolean};
  @Output() public deletarItem = new EventEmitter<string>();
  public formGroup: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      check: [false]
    });
  }

  public deleteItem() {
    console.log('deletando item --> ', this.todo);
    this.deletarItem.emit(this.todo.nome);
  }

}
