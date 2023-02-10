
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import { deleteTodo,createTodo} from "./actions";
import {useState} from "react";
import {v4 as uuid} from 'uuid'

function App() {
    const [newTodo, setNewTodo]= useState("")
    const dispatch = useDispatch()
    const todoList = useSelector((state)=>state.todolist)
    const  handleAdd =()=>{
        dispatch(createTodo({id:uuid(),todo:newTodo,isComplete:false}))
        setNewTodo("")
    }
  return (
    <div className="App">
      <div>
          <input type="text" placeholder="TODO" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
          <button onClick={handleAdd}>Add</button>
      </div>
        <table border={1}>
            <thead>
            <tr>
                <th>id</th>
                <th>todo</th>
                <th>status</th>
                <th colSpan={2}>action</th>
            </tr>
            </thead>
            <tbody>
            {
                todoList.map((todo,index)=><tr key={todo.id}>
                    <td>{index+1}</td>
                    <td>{todo.todo}</td>
                    <td>{todo.isComplete?"Hoàn thành":"Chưa hoàn thành"}</td>
                    <td><button>Edit</button></td>
                    <td><button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button></td>
                </tr>)
            }

            </tbody>
        </table>

    </div>
  );
}

export default App;
