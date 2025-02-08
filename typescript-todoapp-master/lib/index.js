import Todo from './Todo.js';
const todo = new Todo([
    '浏览 Todo.ts 的整体结构',
    '了解接口、修饰符、属性和方法',
    '体会转到定义、查找引用',
    '修复一个 bug，体会全局替换',
    '添加删除功能，体会代码补全、代码提示',
    '添加全部完成功能'
]);
const appElement = document.getElementById('app');
todo.renderTo(appElement);
