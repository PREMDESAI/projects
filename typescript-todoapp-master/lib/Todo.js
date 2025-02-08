export default class Todo {
    constructor(initialTodos = []) {
        /**
         * Todos 列表数据
         */
        this.items = [];
        /**
         * 列表元素
         */
        this.ulElement = document.createElement('ul');
        /**
         * 输入框和添加按钮
         */
        this.addItemElement = this.getAddItemElement();
        initialTodos.forEach(this.addItem.bind(this));
    }
    /**
     * 删除一个元素的所有子元素
     * @param element 将被删除所有子元素的元素
     */
    static clearChildren(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
    /**
     * 添加一项 Todo
     * @param content 添加的 Todo 的内容
     */
    addItem(content) {
        this.items.push({
            content,
            done: false
        });
        this.updateUlElement();
    }
    /**
     * 完成一项 Todo
     * @param index 完成的 Todo 的索引
     */
    doneItem(index) {
        this.items[index].done = true;
    }
    /**
     * 更新 ul 列表
     * 会重新渲染 ul 内的全部内容
     */
    updateUlElement() {
        console.log(this.items);
        Todo.clearChildren(this.ulElement);
        this.items.forEach((item, index) => {
            const liElement = document.createElement('li');
            const labelElement = document.createElement('label');
            liElement.appendChild(labelElement);
            // 创建并添加复选框
            const checkboxElement = document.createElement('input');
            checkboxElement.type = 'checkbox';
            checkboxElement.checked = item.done;
            checkboxElement.onchange = (e) => {
                this.doneItem(index);
            };
            labelElement.appendChild(checkboxElement);
            // 创建并添加文本
            const textElement = document.createElement('span');
            textElement.innerText = item.content;
            labelElement.appendChild(textElement);
            this.ulElement.appendChild(liElement);
        });
    }
    /**
     * 渲染添加按钮
     */
    getAddItemElement() {
        const addItemElement = document.createElement('div');
        // 创建并添加输入框
        const addInputElement = document.createElement('input');
        addInputElement.type = 'text';
        addItemElement.appendChild(addInputElement);
        // 创建并添加添加按钮
        const addButtonElement = document.createElement('button');
        addButtonElement.innerText = '添加';
        addButtonElement.addEventListener('click', () => {
            this.addItem(addInputElement.value);
        });
        addItemElement.appendChild(addButtonElement);
        return addItemElement;
    }
    /**
     * 将 Todo 渲染到指定节点
     */
    renderTo(element) {
        const todoElement = document.createElement('div');
        todoElement.appendChild(this.ulElement);
        todoElement.appendChild(this.addItemElement);
        element.appendChild(todoElement);
    }
}
