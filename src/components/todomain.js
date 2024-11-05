import React, {useState} from 'react';
import Todoform from './todoform';
import Todoitem from './todoitem';

function Todomain() 
{
    const [tasks, setTasks] = useState([
     { id: 1, name: "Webtech assignment", description: "Description 1", schedule: "2024-10-30 12:00", status: "Scheduled" },
    { id: 2, name: "DDCO Quiz", description: "Description 2", schedule: "2024-10-31 15:00", status: "Scheduled" },
    { id: 3, name: "math study", description: "Description 3", schedule: "2024-11-01 09:00", status: "Scheduled" }
   ]);
    const addTask = (newTask)=> setTasks([...tasks, newTask]);
    const updateTask = (updatedTask) => {
        setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));

      };
        const deleteTask = (id) => setTasks(tasks.filter(task =>task.id !== id));
        const completedCount = tasks.filter(task=> task.status === "Completed").length;
        
  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h1 style={styles.header}>To do list</h1>
        <Todoform addTask={addTask} />
        <ol style={styles.taskList}>
          {tasks.map(task => (
            
              <Todoitem
                style={styles.taskItem}
                task={task}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            
          ))}
        </ol>
        <p style={styles.footer}>Total completed: {completedCount}</p>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
    fontFamily: "'Orbitron', sans-serif",
  },
  container: {
    width: '100%',
    maxWidth: '800px',
    padding: '20px',
    backgroundColor: '#1a1a2e',
    borderRadius: '10px',
    boxShadow: '0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff',
    border: '2px solid #00ffff',
  },
  header: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#00ffff',
    textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff',
  },
  taskList: {
    marginTop: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    padding: '10px',
    backgroundColor: '#16213e',
    border: '1px solid #00ffff',
  },
  footer: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '20px',
    color: '#ff00ff',
    textShadow: '0 0 5px #ff00ff, 0 0 10px #ff00ff',
  },
};


export default Todomain;