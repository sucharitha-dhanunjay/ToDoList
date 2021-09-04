import "./App.css";
import TaskList from "./Components/TaskList";
import TaskInput from "./Components/TaskInput";
import { useState } from "react";

export default function App() {
  const [itemList, setItemList] = useState([]);
  const [showInput, setshowInput] = useState(false);
  const [noItemsFlag, setNoitemsFlag] = useState(true);
  const showInputHandler = () => {
    setshowInput(true);
  };
  const closeInputHandler = () => {
    setshowInput(false);
  };

  const AddNewTask = taskItem => {
    setshowInput(false);
    if (taskItem.title === "") {
      return;
    }
    setItemList([...itemList, taskItem]);
    if (noItemsFlag) {
      setNoitemsFlag(false);
    }
  };

  return (
    <div className="app">
      {showInput && (
        <TaskInput oncloseInput={closeInputHandler} onAddNewTask={AddNewTask} />
      )}
      <button className="button" onClick={showInputHandler}>
        Create Task
      </button>
      {noItemsFlag && (
        <div className="noitems">
          Click on Create Task to start adding new tasks!
        </div>
      )}
      <TaskList items={itemList} />
    </div>
  );
}
