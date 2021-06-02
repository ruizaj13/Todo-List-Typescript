import React from 'react';
import { TaskInterface } from '../interfaces';

interface Props {
    task: TaskInterface;
    deleteTask(taskToDelete: string): void;
}

const TodoTask = ({ task, deleteTask }: Props) => {
    return (
        <div className='task'>
            <div className='content'>
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={() => {deleteTask(task.taskName)}}>X</button>
        </div>
    )
}

export default TodoTask
