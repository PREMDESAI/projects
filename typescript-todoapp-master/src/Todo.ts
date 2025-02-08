interface Item {
    content: string;
    done: boolean;
}

export default class Todo {
    /**
     * 删除一个元素的所有子元素
     * @param element 将被删除所有子元素的元素
     */
    static clearChildren(element: HTMLElement) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    /**
     * Todos 列表数据
     */
    items: Item[] = [];
    /**
     * 列表元素
     */
    ulElement = document.createElement('ul');
    /**
     * 输入框和添加按钮
     */
    addItemElement = this.getAddItemElement();

    constructor(initialTodos: string[] = []) {
        initialTodos.forEach(this.addItem.bind(this));
    }

    /**
     * 添加一项 Todo
     * @param content 添加的 Todo 的内容
     */
    addItem(content: string) {
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
    doneItem(index: number) {
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
            }
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
    renderTo(element: HTMLElement) {
        const todoElement = document.createElement('div');

        todoElement.appendChild(this.ulElement);
        todoElement.appendChild(this.addItemElement);

        element.appendChild(todoElement);
    }
}