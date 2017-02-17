import { ITodo } from './iTodo';
/**
 * Todo
 */
export class Todo {
    todos: ITodo[];
    todoApp: any;

    constructor() {
        this.todoApp = document.getElementsByTagName('todo')[0];
        this.todos = [
        ];
        this.getTodo();
    }

    getTodo() {
        let xmlhttp: XMLHttpRequest = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                this.todos = JSON.parse(xmlhttp.responseText);
                this.renderTodo();
            }
        };
        xmlhttp.open('GET', 'http://localhost:3000/todos', true);
        xmlhttp.send();
    }

    renderTodo() {
        for (let t in this.todos) {
            let div = document.createElement('div');
            let card = this.todoCard(this.todos[t]);
            div.innerHTML = card;
            this.todoApp.appendChild(div);
        }
    }
    todoCard = (item: ITodo) => {
        let checked = (item.done) ? '<input type="checkbox" checked>' : '<input type="checkbox" >';
        return `
        <div class="card" style="width: 20rem;">
            <div class="card-block">
                <h4 class="card-title">${item.name}</h4>
                <p class="card-text">${item.description}</p>
                ${checked}
            </div>
        </div>`;
    }
}