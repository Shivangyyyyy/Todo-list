  import React, {useEffect, useState} from "react"
  import SingleTask from "./SingleTask"
  import {Button, Card, Box} from '@mui/material'
  
 export const TodoList = () => {

  const [inputValue , setInputValue] = useState("");
  const [ListValue ,setListValue] = useState([]);
  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if(storedTodos) {
      setListValue(storedTodos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify (ListValue));
  }, [ListValue]);

  const pushListValue = ()=> {
    // ListValue .push(inputValue);
    setListValue([
      ...ListValue,
      {id:Date.now(),title: inputValue, done:false}
    ]);
    setInputValue("");
  };
                                                    
  const doneHandler = (todoId) => {
      const index = ListValue.findIndex((emp) => emp.id === todoId);

      const newTodo = [...ListValue];

      newTodo[index] = {
        id: ListValue[index].id,
        title: ListValue[index].title,
        done: !ListValue[index].done,
      };
      setListValue(newTodo);
    };

    const deHandler = (todoId) => {
      if (window.confirm("Are you sure ? ")) {
        const updatedList = ListValue.filter((item) => item.id !== todoId);
        setListValue(updatedList);
      }
    };
      return (
        <div>
        <div className="App">
        {/* <Box
        style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          marginTop:"2%",
        }}> */}
            <input 
            type="text"
            placeholder="list your task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="input_box"
            />
            <Button
            variant="contained" 
            onClick={pushListValue}
            size= 'large'
            style={{
              background:"#52374e",
              marginLeft:"1.5%",
              color:"#fff",
            }}>
              Add Task
            </Button>
            {/* </Box> */}
            
            <Box>
        <Card variant="outlined"
            sx ={{
              maxWidth:"80%" ,
              margin :"auto", 
              background: "#fca903",
              // marginTop:"%"
              }}>
          
            {ListValue.map ((v,i) => {
              return (
                <SingleTask  
                  v={v}
                  doneHandler={doneHandler}
                  deHandler={deHandler}
                  i={i}
                 />
               );
              })}
            
          </Card>
          </Box>
          </div>      
            
      </div>
    
    );
  };
  export default TodoList;