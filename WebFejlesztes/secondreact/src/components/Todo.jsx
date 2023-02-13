import React,{useState} from "react";
import { data } from "../data";
import { ListGroup,ListGroupItem,Input,Form } from "reactstrap";
import { v4 as uuidv4 } from 'uuid';

export const Todo = ({ setIsLoggedIn }) => {
  const [todos,setTodos]=useState(data)
  const [newItem,setNewItem]=useState('')

  const addTodo =()=>{
    console.log('új adat:',newItem,uuidv4())
    const newTodo={id:uuidv4(),name:newItem,description:null,timestamp:null,status:0}
    setTodos([...todos,newTodo])
    setNewItem('')
  }
  const deleteTodo =(id)=>{
    console.log('törlendő:',id)
    const newTodos=todos.filter(obj=>obj.id!=id)
    setTodos(newTodos)
  }

  return (
    <div className="container text-center todo">
      <h3>My Todos</h3>

      <Form className="mb-1 d-flex">
          <Input placeholder="add todo" value={newItem} onChange={(e)=>setNewItem(e.target.value)}/>
          <i className="fa-solid fa-plus btn btn-primary fa-2x" onClick={addTodo}></i>
      </Form>

      <ListGroup className="">
        {todos.map(obj=>
           <ListGroupItem key={obj.id} className="d-flex justify-content-between">
              <i className="fa-solid fa-check {obj.status==1 && 'text-success'} fa-2x"></i>
              <span className={obj.status==1? "done" : ""}>{obj.name}</span>
              <i className="fa-solid fa-trash text-danger " onClick={()=>deleteTodo(obj.id)}></i>
          </ListGroupItem>
          )}
       
      </ListGroup>
      <div className="btn btn-primary" onClick={() => setIsLoggedIn(false)}>
        logout
      </div>
    </div>
  );
};
