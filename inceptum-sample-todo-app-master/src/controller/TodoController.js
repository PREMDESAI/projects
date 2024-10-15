
const { HttpError } = require('inceptum-web');

class TodoController {
  constructor() {
    this.todoService = null;
  }

  /**
   *
   * @param todo
   * @param {ServerResponse} res
   */
  createTodo(todo, req, res) {
    return this.todoService.create(todo)
      .then((newTodo) => {
        res.status(201);
        res.location(`/todo/${newTodo.id}`);
        res.json('OK');
      });
  }
  listTodos(page, pageSize, req, res) {
    const todos = this.todoService.listTodos(page, pageSize);
    return todos.then((resp) => {
      res.json(resp);
    },
    (err) => {
      res.send(err);
    });
  }
  get(id, req, res) {
    return this.todoService.getTodo(id)
      .then((todo) => {
        if (!todo) {
          throw HttpError.notFound(`Couldn't find a todo with id: ${id}`);
        }
        res.send(todo);
      });
  }
  markCompleted(id, req, res) {
    return this.todoService.markCompleted(id)
      .then(() => {
        res.status(204);
        res.json('OK');
      });
  }
}

TodoController.autowire = {
  todoService: 'TodoService'
};

module.exports = TodoController;
