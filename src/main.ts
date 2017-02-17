import { Todo } from './todo/todo';
import { Count } from './es6/bind';
import { Calc } from './calc';

let calc = new Calc();
let document: any = window.document;
document.calc = new Calc();

document.count = new Count(7);

document.todo = new Todo();
