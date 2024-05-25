document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Function to add a new todo item
    const addTodo = () => {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');
            li.textContent = todoText;

            // Add remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');
            removeBtn.addEventListener('click', () => {
                li.remove();
            });

            // Add click event to toggle completion
            li.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            li.appendChild(removeBtn);
            todoList.appendChild(li);
            todoInput.value = '';
        }
    };

    addBtn.addEventListener('click', addTodo);

    // Add todo item on Enter key press
    todoInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});
