import { Component } from "@angular/core";
import { Todo } from "src/models/todos";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public title = "Minhas Tarefas";
  public todos: Todo[] = [];

  constructor() {
    this.todos.push(new Todo(1, "cortar a grama", true));
    this.todos.push(new Todo(2, "ir ao supermercado", false));
    this.todos.push(new Todo(3, "banhar o cachorro", false));
  }
}
