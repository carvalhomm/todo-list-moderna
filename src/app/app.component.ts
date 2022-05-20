import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  public novoItem: string;

  public receberDados(value: string) {
    console.log('recebendo dado --> ', value);
    this.novoItem = value;
  }
}
