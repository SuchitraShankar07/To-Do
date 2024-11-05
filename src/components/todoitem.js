import React, { useState } from 'react';

function Todoitem({ task, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState({ ...task });

  const toggleComplete = () => {
    updateTask({ ...task, status: task.status === 'Scheduled' ? 'Completed' : 'Scheduled' });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSave = () => {
    updateTask(editTask);
    setIsEditing(false);
  };

  return (
    <div style={styles.item}>
      {isEditing ? (
        <>
          <input name="name" value={editTask.name} onChange={handleChange} style={styles.input} />
          <input name="description" value={editTask.description} onChange={handleChange} style={styles.input} />
          <button onClick={handleSave} style={styles.button}>SAVE</button>
        </>
      ) : (
        <>
          <div style={styles.taskInfo}>
            <p style={task.status === 'Completed' ? {...styles.task, ...styles.completed} : styles.task}>
              {task.name} - {task.description}
            </p>
            <p style={styles.schedule}>{task.schedule}</p>
          </div>
          <div style={styles.buttonGroup}>
            <button onClick={toggleComplete} style={{...styles.button, backgroundColor: task.status === 'Scheduled' ? '#00ff00' : '#ff00ff'}}>
              {task.status === 'Scheduled' ? 'COMPLETE' : 'REVERT'}
            </button>
            <button onClick={handleEdit} style={{...styles.button, backgroundColor: '#ffff00'}}>EDIT</button>
            <button onClick={() => deleteTask(task.id)} style={{...styles.button, backgroundColor: '#ff0000'}}>DELETE</button>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginBottom: '15px',
    padding: '10px',
    backgroundColor: '#0f0f1a',
    borderRadius: '5px',
    border: '1px solid #00ffff',
    boxShadow: '0 0 5px #00ffff',
  },
  taskInfo: {
    marginBottom: '10px',
  },
  task: {
    fontSize: '1em',
    color: '#00ffff',
    marginBottom: '5px',
  },
  completed: {
    textDecoration: 'line-through',
    color: '#ff00ff',
  },
  schedule: {
    fontSize: '0.8em',
    color: '#ffff00',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    padding: '5px 10px',
    border: 'none',
    borderRadius: '3px',
    color: '#000000',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: "'Orbitron', sans-serif",
  },
  input: {
    marginBottom: '10px',
    padding: '5px',
    backgroundColor: '#16213e',
    border: '1px solid #00ffff',
    borderRadius: '3px',
    color: '#00ffff',
    fontFamily: "'Orbitron', sans-serif",
  },
};



export default Todoitem;
