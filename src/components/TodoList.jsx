import TodoItem from "./TodoItem";

function TodoList( {todos}) {
    return (
        <div>
            {todos.length === 0 ? (
                <p>"no tasks yet!"</p>
            ): (
            todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} />
            ))
            )}
        </div>
    )
}
export default TodoList;