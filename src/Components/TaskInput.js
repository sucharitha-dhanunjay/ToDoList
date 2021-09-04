import Modal from "./Modal";
import "./TaskInput.css";
import { useRef, useState, useEffect } from "react";
const TaskInput = props => {
  const [time, setTime] = useState(2);
  let isTimerExpired = false;

  const titleref = useRef();

  const formSubmitHandler = event => {
    event.preventDefault();
    props.onAddNewTask({
      title: titleref.current.value,
      time: time,
      isTimerExpired: isTimerExpired
    });
  };

  const onCancelClick = event => {
    event.preventDefault();
    props.oncloseInput();
  };

  useEffect(
    () => {
      let timerId = setTimeout(() => {
        isTimerExpired = true;
      }, time * 10000);
      return () => {
        clearTimeout(timerId);
        isTimerExpired = false; // Clear the previously set timer, so that at a point of time only one timer runs
      };
    },
    [time]
  );

  const onTimechangeHandler = event => {
    setTime(event.target.value);
  };

  return (
    <Modal onClose={props.oncloseInput}>
      <form onSubmit={formSubmitHandler} className="form">
        <div className="title">
          <label>Title</label>
          <input type="text" ref={titleref} />
        </div>
        <div className="time">
          <label>Time</label>
          <input
            type="number"
            step="1"
            value={time}
            onChange={onTimechangeHandler}
          />
        </div>
        <div className="buttons">
          <button type="submit" onClick={formSubmitHandler}>
            Create
          </button>
          <button onClick={onCancelClick}> Cancel</button>
        </div>
      </form>
    </Modal>
  );
};
export default TaskInput;
