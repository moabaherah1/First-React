function TodoItem({ todo }) {
    return (
        <div>
            <input type="checkbox"/>
            <span>{todo.text}</span>
            <button>Delete</button>
        </div>
    )
    
}
export default TodoItem 