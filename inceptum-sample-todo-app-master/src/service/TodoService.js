const uuid = require('uuid');

class TodoService {
  /**
   * Creates a todo in the DB.
   * @param {Object} todo The todo to create in the database
   * @param {string} todo.description The description of the todo
   * @param {string} [todo.id] The id to use for the Todo. if not provided one will be generated.
   * @returns {Promise.<{id: string, description: string, completed: boolean}>} A promise that will complete with the stored Todo
   */
  create(todo) {
    const newTodo = {
      id: todo.id || uuid.v4(),
      description: todo.description,
      completed: false
    };
    return this.mysqlClient.runInTransaction(false, (transactionalClient) =>
      transactionalClient.query('INSERT INTO todo (id,description,completed) VALUES (?,?,?)',
        newTodo.id, newTodo.description, newTodo.completed))
      .then(() => newTodo);
  }

  listTodos(page, pageSize) {
    const start = ((page - 1) * pageSize);
    return this.mysqlClient.runInTransaction(true, (transactionalClient) => this.countTodos(transactionalClient)
        .then((numRows) =>
          Promise.all([numRows, (numRows > 0 ? this.getTodos(transactionalClient, start, pageSize) : [])]))
        .spread((numRows, rows) => {
          const response = {};
          response.pageInfo = {
            numResults: numRows,
            pageNum: page,
            pageSize
          };
          response.items = rows.map((row) => this.rowToModel(row));
          return response;
        }));
  }

  getTodos(transactionalClient, start, size) {
    return transactionalClient.query('SELECT id,description,completed FROM todo LIMIT ?,?', start, size);
  }

  /**
   * @private
   * @param {Object} row A row returned by a query to get the jobs
   * @returns {{id: string, description: string, completed: boolean}}
   */
  rowToModel(row) {
    return {
      id: row.id,
      description: row.description,
      completed: !!row.completed
    };
  }
  getTodo(id) {
    return this.mysqlClient.runInTransaction(true,
      (transactionalClient) => transactionalClient.query('SELECT id,description,completed FROM todo WHERE id=?', id))
      .then((rows) => {
        if (rows === null || rows.length === 0) {
          return null;
        }
        const row = rows[0];
        return this.rowToModel(row);
      });
  }
  countTodos(transactionalClient) {
    return transactionalClient.query('SELECT count(*) AS numTodos FROM todo')
      .then((rows) => {
        if (rows === null || rows.length === 0) {
          return 0;
        }
        const row = rows[0];
        return row.numTodos;
      });
  }
  markCompleted(id) {
    return this.mysqlClient.runInTransaction(true,
      (transactionalClient) => transactionalClient.query('UPDATE todo SET completed=1 WHERE id=?', id));
  }
}

TodoService.autowire = {
  mysqlClient: 'mainMySQLClient'
};

module.exports = { TodoService };
