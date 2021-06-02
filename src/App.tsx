import React, {FC, ChangeEvent, useState} from 'react';
import {TaskInterface} from './interfaces';
import './App.css';
import TodoTask from './components/TodoTask';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [list, setList] = useState<TaskInterface[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  }

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadline: deadline
    };
    setList([...list, newTask]);
    setTask('');
    setDeadline(0);
  }

  return (
    <div className='App'>
      <div className='header'>
          <div className='inputContainer'>
            <input name='task' value={task} type='text' placeholder='Task...' onChange={handleChange}/>
            <input name='deadline' value={deadline} type='number' placeholder='Deadline' onChange={handleChange}/>
          </div>
          <button onClick={addTask}> Add Task </button>
      </div>
      <div className='todoList'>
        {list.map((task: taskInterface, key: number) => {
          return <TodoTask key={key}/>;
        })} 
      </div>
    </div>
  );
}

export default App;
