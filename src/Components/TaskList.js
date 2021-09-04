import Card from "./Card";
import "./TaskList.css";
const TaskList = props => {
  return (
    <ul className="taskList">
      {props.items.map((item, index) => (
        <Card
          title={item.title}
          key={index}
          timerExpired={item.isTimerExpired}
        />
      ))}
    </ul>
  );
};

export default TaskList;
