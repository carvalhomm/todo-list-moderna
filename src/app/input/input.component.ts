import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  public formGroup: FormGroup;
  @Output() public enviarDados = new EventEmitter<string>();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      item: [null]
    });
  }

  public adicionarItem() {
    const value = this.formGroup.get('item').value;
    console.log('valor do formulário: ', value);
    this.enviarDados.emit(value);
    this.formGroup.get('item').reset();
  }

}
