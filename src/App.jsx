import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { add,toggle } from "./redux/todoSlice"

function App() {
    let todo = useSelector((state)=>state.todo)
    let [page,setPage] = useState(0)
    let [task,setTask] = useState(0)
    let [filteredTodo, setFilteredTodo] = useState(todo)
  let dispatch = useDispatch()

  let createTask = ()=>{
    let payload = {
      task,
      status: false
    }
    dispatch(add(payload))
    console.log(setTask(""));

  }

  let toggleTask = (i)=>{
    dispatch(toggle(i))
  }
  
  useEffect(()=>{
    if(page===0){
      setFilteredTodo(todo)
    }else if(page===1){
      setFilteredTodo(todo.filter(e=>!e.status))
    }else if(page===2){
      setFilteredTodo(todo.filter(e=>e.status))
    }
   
  },[page,todo])
  

  return <>
  <div className="container-fluid">
    <h1 className="heading">
      Todo Item's
    </h1>
    <div className="todo-wrapper">
      <div className="p-5 text-center " >
     <input type="text" className={'p-1 rounded border-primary'}  placeholder="Enter...."  onChange={(e)=>{
      setTask(e.target.value)
     
    }} />
     <button className="btn btn-primary m-2" onClick={()=>{
      createTask()      
      
      }}>Create</button>
      </div>
      <div className="todo-tabs text-center">
        <ul>
          <li className={page===0?'btn btn-outline-primary col-2  m-3 active':'btn btn-outline-primary col-2  m-3'} onClick={()=>{
            setPage(0)
          }}>All</li>
          <li className={page===1?'btn btn-outline-primary col-2  m-3 active':'btn btn-outline-primary col-2  m-3'} onClick={()=>{
            setPage(1)
          }}>Pending</li>
          <li className={page===2?'btn btn-outline-primary col-2  m-3 active':'btn btn-outline-primary col-2  m-3'} onClick={()=>{
            setPage(2)
          }}>Completed</li>
        </ul>
      </div>
      <div className="todo-items ">
        {
            filteredTodo.map((e)=>{
              return <li key={e.id} className={e.status?'strike':' '}>
                  <input type="checkbox" checked={e.status} onClick={()=>toggleTask(e.id)}/>
                  {e.task}
              </li>
            })
        }
      </div>
    </div>
  </div>
  
  </>
}

export default App
