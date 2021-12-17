  import logo from './logo.svg';
  import './App.css';
  // import{useState, useEffect} from "react";
  import ButtonAppBar from './components/Navbar';
  import TodoList from './components/TodoList';
  // import SingleTask from './components/SingleTask';
  function App() {


    return (

      <>
      <ButtonAppBar />
      <TodoList />
    
      </>
    );
  };

  export default App;
  