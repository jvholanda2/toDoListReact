import "./style.css"
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";


function App(props, tasks) {
  const tasksList = props.tasks?.map(task => (
      <Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed}
      />
    )
  )
  return (
    <div className="todoapp stack-large">
      {console.log(tasks)}
      <h1>To do list</h1>
      <Form/>
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">
        Faltando 4 tarefas
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {/* <Todo className="todo stack-small" name="fight" completed={true} id='todo-0'/>
        <Todo className="todo stack-small" name="defeat" completed={true} id='todo-1'/>
        <Todo className="todo stack-small" name="rise" completed={false} id='todo-2'/>
        <Todo className="todo stack-small" name="repeat" completed={false} id='todo-3'/> */}
        {tasksList}
      </ul>
    </div>
  );
}

export default App;
