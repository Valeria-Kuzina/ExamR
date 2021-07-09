import React from 'react';
import s from './TaskCard.module.css';
import CardTask from './CardTask/CardTask';

const CanbanCard = (props) =>{
    let id= props.id;
    let tasks=props.tasks;
    let name = props.name;
    let appTheme = props.appTheme;
    let deleteTask = (taskId) =>{
        props.deleteTask(id, taskId)
    }
    let tasksList = tasks.map(t=>{
        return(
            <CardTask
                key={t.id}
                id={t.id} 
                taskText={t.taskText}
                taskCreationDate={t.taskCreationDate}
                deleteTask={deleteTask}
                appTheme={appTheme}
                cardId = {id}
            />
        )
    });
    let cardType = props.cardType;
    
    let tasksIn = tasksList.length;
    return(     
        <div className={appTheme==="light"?`${s.column} ${cardType==="important1"?s.important1:cardType==="important2"?s.important2:s.important3}`:`${s.column} ${s.d_column} ${cardType==="important1"?s.important1:cardType==="important2"?s.important2:s.important3}`}>
            <h2 className={appTheme==="light"?s.column__header:`${s.d_column__header}`}>{name} ({tasksIn})</h2>
            {tasksList}
        </div>
    );

}
export default CanbanCard;